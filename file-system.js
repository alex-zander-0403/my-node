// require("dotenv").config();
const fs = require("fs");
const path = require("path");

// создание папки
// fs.mkdirSync(path.resolve(__dirname, "newDir"));

// создание нескольких вложенных папок рекурсивно
// fs.mkdirSync(path.resolve(__dirname, "newDir1", "newDir2", "newDir3"), {
//   recursive: true,
// });

// создание папки асинхронно
// fs.mkdir(path.resolve(__dirname, "newDir"), (err) => {
//   if (err) {
//     console.log(err.message);
//     return;
//   }
//   console.log("Папка создана");
// });

// ============================================

// удаление директории
// fs.rmdir(path.resolve(__dirname, "newDir"), (err) => {
//   if (err) {
//     console.log(err.message);
//     return;
//   }
//   console.log("Папка удалена");
// });

// ============================================

// создание и/или запись/перезапись в файл
// fs.writeFile(path.resolve(__dirname, "text.txt"), "hello, world!", (err) => {
//   if (err) {
//     console.log("Файл записан");
//     return;
//   }
// });

// дозапись
// fs.appendFile(path.resolve(__dirname, "text.txt"), "added text", (err) => {
//   if (err) {
//     console.log("Файл обновлен");
//     return;
//   }
// });

// Создание Promise-обертки
const writeFileAsync = async (path, data) => {
  return new Promise((resolve, reject) =>
    fs.writeFile(path, data, (err) => {
      if (err) {
        return reject(err);
      }
      resolve();
    })
  );
};

// Создание Promise-обертки
const appendFileAsync = async (path, data) => {
  return new Promise((resolve, reject) =>
    fs.appendFile(path, data, (err) => {
      if (err) {
        return reject(err);
      }
      resolve();
    })
  );
};

// вызов writeFileAsync для создания + appendFileAsync x3 для записи
writeFileAsync(path.resolve(__dirname, "text.txt"), "start")
  .then(() => appendFileAsync(path.resolve(__dirname, "text.txt"), "123"))
  .then(() => appendFileAsync(path.resolve(__dirname, "text.txt"), "456"))
  .then(() => appendFileAsync(path.resolve(__dirname, "text.txt"), "789"))
  .catch((err) => console.log(err.message));
