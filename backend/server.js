const http = require("http");

const PORT = 3000;
const REDIS_HOST = process.env.REDIS_HOST || "localhost";

const server = http.createServer((req, res) => {
  if (req.url === "/api") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({
      message: "Backend API working",
      redis_host: REDIS_HOST
    }));
  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
});

server.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});

