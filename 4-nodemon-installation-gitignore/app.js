const http = require("http");

console.log("Hello, World!");

const server = http.createServer((req, res) => {
  // res.writeHead(200, { "Content-Type": "text/plain" });
  // res.end("Hello, World!");
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(
    "<html><head><title>Hello</title></head><body><h1>Hello, World! 345</h1></body></html>"
  );
  res.end();
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
