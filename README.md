# line-flex-designer

This is a minimal Node.js application that allows you to edit LINE Flex Message templates and broadcast them to a list of LINE user IDs.

## Usage

1. Set `LINE_CHANNEL_ACCESS_TOKEN` environment variable with your LINE channel access token.
2. Run the server:
   ```bash
   node server.js
   ```
3. Open `http://localhost:3000` in your browser.
4. Select a predefined template, adjust the JSON, upload a text/CSV file containing LINE user IDs (one per line), and press **Broadcast**.

The server sends the edited Flex Message individually to each provided user ID via the LINE Messaging API.
