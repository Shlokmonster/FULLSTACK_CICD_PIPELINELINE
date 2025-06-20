const http = require("http");

const PORT = 3001;

const myserver = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, world!\n");
});

myserver.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
