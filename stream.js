// Readable - чтение данных
// Writable - запись данных
// Duplex - чтение и запись
// Transform - модификация данных при чтении/записи

// =============== Readable ===============

const fs = require("fs");
const path = require("path");

// const stream = fs.createReadStream(path.resolve(__dirname, "text.txt"));

// один чанк по умолчанию 64кб
// stream.on("data", (chunk) => {
//   console.log(chunk);
// });

// ---------------------------------

// const fs = require("fs");

// Создаем readable stream
// const readableStream = fs.createReadStream("text.txt", "utf8");

// Обработка данных
// readableStream.on("data", (chunk) => {
//   console.log("Received chunk:", chunk.length, "bytes");
// });

// Завершение чтения
// readableStream.on("end", () => {
//   console.log("File reading completed");
// });

// Обработка ошибок
// readableStream.on("error", (err) => {
//   console.error("Error reading file:", err);
// });

// =============== Writable ===============

// const writableStream = fs.createWriteStream(
//   path.resolve(__dirname, "text2.txt")
// );

// for (let i = 0; i < 25; i++) {
//   writableStream.write(i + "\n");
// }

// writableStream.end();

// =============== HTTP ===============

// const http = require("http");

// const PORT = process.env.PORT || 5000;

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "content-type": "text/html; charset=utf-8" }); // для отображения кириллицы
//   res.end("Сервер работает!");
// });

// server.listen(PORT, () => console.log(`Сервер запущен: ${PORT}`));