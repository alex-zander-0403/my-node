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

// удаление директории
fs.rmdir(path.resolve(__dirname, "newDir"), (err) => {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log("Папка удалена");
});

// ============================================

// создание и/или запись/перезапись в файл
fs.writeFile(path.resolve(__dirname, "text.txt"), "hello, world!", (err) => {
  if (err) {
    console.log("Файл записан");
    return;
  }
});

// дозапись
fs.appendFile(path.resolve(__dirname, "text.txt"), "added text", (err) => {
  if (err) {
    console.log("Файл обновлен");
    return;
  }
});
