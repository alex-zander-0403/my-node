// require("dotenv").config();
const fs = require("fs");
const path = require("path");
const { text } = require("stream/consumers");

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

// ============================================

// функция-обертка для создания файла на промисах
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

// функция-обертка для дозаписи в файл на промисах
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
// writeFileAsync(path.resolve(__dirname, "text.txt"), "start")
//   .then(() => appendFileAsync(path.resolve(__dirname, "text.txt"), "123"))
//   .then(() => appendFileAsync(path.resolve(__dirname, "text.txt"), "456"))
//   .then(() => appendFileAsync(path.resolve(__dirname, "text.txt"), "789"))
//   .catch((err) => console.log(err.message));

// ============================================

// функция чтения файла на промисах
const readFileAsync = async (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: "utf-8" }, (err, data) => {
      if (err) {
        return reject(err);
      }
      resolve(data);
    });
  });
};

// вызов writeFileAsync для создания + appendFileAsync x3 для записи + readFileAsync чтение
// writeFileAsync(path.resolve(__dirname, "text.txt"), "start")
//   .then(() => appendFileAsync(path.resolve(__dirname, "text.txt"), "111"))
//   .then(() => appendFileAsync(path.resolve(__dirname, "text.txt"), "222"))
//   .then(() => appendFileAsync(path.resolve(__dirname, "text.txt"), "333"))
//   .then(() => readFileAsync(path.resolve(__dirname, "text.txt")))
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err.message));

// ============================================

const removeFileAsync = async (path) => {
  return new Promise((resolve, reject) => {
    fs.rm(path, (err) => {
      if (err) {
        reject(err);
      }
      resolve();
    });
  });
};

removeFileAsync(path.resolve(__dirname, "text.txt"));
