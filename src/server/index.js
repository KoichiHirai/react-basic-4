import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {StaticRouter} from 'react-router-dom/server';
import App from '../App'; //ok

console.log("StaticRouter at index.js" + StaticRouter + "\n\n"); //OK
console.log("ReactDOMServer at index.js" + ReactDOMServer + "\n\n");

const express = require('express'); 
const app = express(); 

// GETリクエストのルート（'/'）で「Hello world」を送信
app.get('/', (req, res) => {
  // res.send('Hello world');
  const context = {};
  const content = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>SSR App</title>
    </head>
    <body>
      <div id="root">${content}</div>
      <script src="client_bundle.js"></script>
    </body>
    </html>
  `;

  res.send(html);
});

const PORT = 9000; 
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`); 
});