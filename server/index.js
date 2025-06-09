const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client')));

app.post('/broadcast', (req, res) => {
  const message = req.body;
  console.log('Broadcasting message:', JSON.stringify(message, null, 2));
  // Integration with LINE OA API would go here.
  res.json({ status: 'ok' });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
