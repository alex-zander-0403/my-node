const EventEmitter = require("events");
// Создаем экземпляр EventEmitter
const emitter = new EventEmitter();

// Подписываемся на событие "message"
emitter.on("message", (first, second) => {
  console.log(`Сообщение: ${first}`);
  console.log(`Второй аргумент: ${second}`);
});

// ============================================

const FIRST_ARG = process.env.FIRST_ARG || "";
const SECOND_ARG = process.env.SECOND_ARG || undefined;

// Генерируем событие
if (FIRST_ARG) {
  emitter.emit("message", FIRST_ARG, SECOND_ARG);
} else {
  emitter.emit("message", "сообщение не указано");
}

// FIRST_ARG="мое сообщение в консоли" SECOND_ARG=123 node events.js
// Сообщение: мое сообщение в консоли
// Второй аргумент: 123
