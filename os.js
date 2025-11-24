const os = require("os");

// узнать платформу, аналогично process.platform
console.log(os.platform()); // linux

// архитектура процессора
console.log(os.arch()); // x64

// массив где каждый объект - описание ядра процессора
console.log(os.cpus());

// количество ядер
console.log(os.cpus().length); // 16
