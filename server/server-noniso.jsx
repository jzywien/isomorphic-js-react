import express from 'express';

const app = express();

app.use((req, res) => {
  res.send(staticHtml);
});

const staticHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Isomorphic Redux Demo</title>
        <link rel="stylesheet" href="/styles.css">
      </head>
      <body>
        <div id="root"></div>
        <script type="application/javascript" src="/bundle.js"></script>
      </body>
    </html>
`;

export default app;
