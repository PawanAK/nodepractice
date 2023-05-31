const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello Iam response");
  })
  .listen(8181, "127.0.0.1");
