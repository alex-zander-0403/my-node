const http = require("http");
require("dotenv").config();

const PORT = process.env.PORT || 5001;

// script --> "start": "nodemon index.js"
const server = http.createServer((req, res) => {
  res.end(req.url);
});

server.listen(PORT, () => console.log(`Сервер запущен, PORT = ${PORT}`));
