const ssr = () => (`
  <html>
    <head>
      <title>CountUp</title>
      <meta charset="utf-8" />
    </head>
    <body>
      <div id="app">
        <h1>0</h1>
        <button type="button">+</button>
        <p>${new Date().toTimeString()}</p>
      </div>
    </body>
  </html>
`);

export default ssr;
