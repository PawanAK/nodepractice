const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(`
    <html>
      <body>
        <h1 style="background:red">Hello There</h1>
      </body>
    </html>
  `);
  res.end();
});

const port = 8181;
server.listen(port, "127.0.0.1");
console.log(`serve is running on ${port} `);
