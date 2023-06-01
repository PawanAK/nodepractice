const http = require("http");
const fs = require("fs");

let HTMl = fs.readFileSync(`${__dirname}/index.html`);
const names = ["francis", "steve", "rob", "hero"];
const cars = {
  name: "Maruthi",
  model: "suuki",
};

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  const json = JSON.stringify({
    names,
    cars,
  });

  res.end(json.toString(json));
});

const port = 8181;
server.listen(port, "127.0.0.1");
console.log(`serve is running on ${port} `);
