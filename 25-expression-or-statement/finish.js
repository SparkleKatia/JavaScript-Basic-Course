/** ЗАДАЧА 25 - Выражение или инструкция
 *
 * Определите тип каждой конструкции JavaScript:
 *  - выражение (expression)
 *  - инструкция (statement)
 *  - выражение-инструкция (expression statement)
 */

15; // выражение (expression)

const myObject = {
  // выражение (expression)
  x: 10,
  y: true,
}; // инструкция (statement)

myObject.z = "abc"; //выражение-инструкция (expression statement)

delete myObject.x; // выражение-инструкция (expression statement)

let newVariable; // инструкция (statement)

newVariable = 30 + 5; // выражение-инструкция (expression statement)

console.log(newVariable); //выражение-инструкция (expression statement)

if (newVariable > 10) {
  console.log(`${newVariable} больше 10`);
} // инструкция (statement)
