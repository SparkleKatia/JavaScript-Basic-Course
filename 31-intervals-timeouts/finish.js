/** ЗАДАЧА 31 - Интервалы и Таймауты
 *
 * Используйте следующие встроенные функции:
 * setTimeout
 * setInterval
 * clearInterval
 *
 * Нужно вывести в консоль ТОЛЬКО 5 сообщений с интервалом 2 секунды:
 * "Сообщение номер 1"
 * "Сообщение номер 2"
 * "Сообщение номер 3"
 * "Сообщение номер 4"
 * "Сообщение номер 5"
 */
let a = 1;
function printMessage() {
  console.log(`Сообщение номер ${a}`);
  a++;
}

let intervalId = setInterval(printMessage, 2000);

setTimeout(() => {
  console.log("stop");
  clearInterval(intervalId);
}, 10000);
