/** ЗАДАЧА 62 - Разница в объявлении функций
 *
 * 1. Объясните разницу между двумя вариантами объявления функций
 *
 * 2. Покажите эту разницу, добавив дополнительный код под функциями
 *
 * 3. Также вызовите обе функции
 */

// // Function can be called before declaration
function firstFunction(a, b) {
  return a + b;
}

/// // Function cannot be called before declaration
const secondFunction = function (a, b) {
  return a + b;
};

console.log(secondFunction(1, 2));

console.log(firstFunction(1, 2));

firstFunction = 32;

//console.log(firstFunction(1, 2)); // Error -> is not a function

secondFunction = 23; // error -> assignment to a constant variable

console.log(secondFunction(1, 2));
