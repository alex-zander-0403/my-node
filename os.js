const os = require("os");
const cluster = require("cluster");

// узнать платформу, аналогично process.platform
// console.log(os.platform()); // linux

// архитектура процессора
// console.log(os.arch()); // x64

// массив где каждый объект - описание ядра процессора
// console.log(os.cpus());

// количество ядер
// console.log(os.cpus().length); // 16

// =================================================================

// запускаем разное количество процессов в зависимости от количества ядер
if (cluster.isMaster) {
  for (let i = 0; i < os.cpus().length - 2; i++) {
    cluster.fork();
  }

  // если умер один воркер, запускаем новый
  cluster.on("exit", (e) => {
    console.log(`Воркер с pid=${e.process.pid} умер`);
    cluster.fork();
  });
} else {
  console.log(`Воркер с pid=${process.pid} запущен`);

  setInterval(() => {
    console.log(`Процесс с pid=${process.pid} работает`);
  }, 5000);
}
