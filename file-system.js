// require("dotenv").config();
const fs = require("fs");
const path = require("path");

// создание папки
fs.mkdirSync(path.resolve(__dirname, "newDir"));

// создание нескольких вложенных папок рекурсивно
fs.mkdirSync(path.resolve(__dirname, "newDir1", "newDir2", "newDir3"), {
  recursive: true,
});

// создание папки асинхронно
fs.mkdir(path.resolve(__dirname, "newDir"), (err) => {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log("Папка создана");
});

// ============================================

// удаление
fs.rmdir(path.resolve(__dirname, "newDir"), (err) => {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log("Папка удалена");
});
