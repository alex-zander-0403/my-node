// require("dotenv").config();

const Emitter = require("events");
const emitter = new Emitter();

// пользовательское событие message
emitter.on("message", (data, second) => {
  console.log("Сообщение: " + data);
  console.log("Второй аргумент: " + second);
});

const MESSAGE = process.env.MESSAGE || "";

if (MESSAGE) {
  emitter.emit("message", MESSAGE, 123);
} else {
  emitter.emit("message", "нет сообщения");
}

// MESSAGE="мое сообщение в консоли" node events.js