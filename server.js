const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const LINE_TOKEN = process.env.LINE_CHANNEL_ACCESS_TOKEN || '';

function sendLineMessage(userId, message) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({ to: userId, messages: [message] });
    const options = {
      hostname: 'api.line.me',
      path: '/v2/bot/message/push',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${LINE_TOKEN}`,
        'Content-Length': Buffer.byteLength(data),
      },
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(body);
        } else {
          reject(new Error(`LINE API error: ${res.statusCode} ${body}`));
        }
      });
    });

    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

function parseMultipart(req, boundary, callback) {
  const chunks = [];
  req.on('data', (chunk) => chunks.push(chunk));
  req.on('end', () => {
    const body = Buffer.concat(chunks).toString();
    const result = {};
    const parts = body.split('--' + boundary);
    parts.forEach(part => {
      if (part.includes('Content-Disposition')) {
        const nameMatch = part.match(/name="([^"]+)"/);
        if (!nameMatch) return;
        const name = nameMatch[1];
        const start = part.indexOf('\r\n\r\n');
        if (start === -1) return;
        const content = part.slice(start + 4, part.lastIndexOf('\r\n'));
        result[name] = content;
      }
    });
    callback(null, result);
  });
}

function serveIndex(res) {
  fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end('Server error');
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    serveIndex(res);
    return;
  }

  if (req.method === 'POST' && req.url === '/broadcast') {
    const contentType = req.headers['content-type'] || '';
    const match = contentType.match(/boundary=(.+)$/);
    if (!match) {
      res.writeHead(400);
      res.end('Invalid request');
      return;
    }
    const boundary = match[1];
    parseMultipart(req, boundary, async (err, fields) => {
      if (err) {
        res.writeHead(500);
        res.end('Error parsing form');
        return;
      }
      let users = [];
      if (fields.users) {
        users = fields.users.split(/\r?\n/).map(u => u.trim()).filter(Boolean);
      }
      let template;
      try {
        template = JSON.parse(fields.template || '{}');
      } catch (e) {
        res.writeHead(400);
        res.end('Invalid JSON template');
        return;
      }
      const results = [];
      for (const id of users) {
        try {
          await sendLineMessage(id, template);
          results.push(`${id}: ok`);
        } catch (e) {
          results.push(`${id}: ${e.message}`);
        }
      }
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(results.join('\n'));
    });
    return;
  }

  res.writeHead(404);
  res.end('Not found');
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
