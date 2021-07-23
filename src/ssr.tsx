import React from 'react';
import { renderToString } from 'react-dom/server';
import CountUp from './components/CountUp';

// React ElementをHTMLに変換
const ssr = (): string => (`
  <html>
    <head>
      <title>CountUp</title>
      <meta charset="utf-8" />
    </head>
    <body>
      <div id="app">
        ${renderToString(<CountUp />)}
      </div>
      <script src="./client.js"></script>
    </body>
  </html>
`);

export default ssr;
