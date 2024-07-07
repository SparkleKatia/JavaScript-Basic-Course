/** ЗАДАЧА 6 - Типы данных
 *
 * 1. Объявите несколько переменных и присвойте им значения:
 *  - строка
 *  - число
 *  - логическое
 *  - null
 *  - undefined
 *  - объект
 *  - массив
 *
 * 2. Выведите в консоль тип каждого из значений
 * используя оператор typeof
 */

const stringVar = "Hello!";
const numVar = 100;
const bolVar = true;
const nullVar = null;
const undefVar = undefined;
const objVar = {
  name: "Katia",
  surname: "Zhyrnova",
};
const arrVar = [1, 2, 3];

console.log(`The type of variable 'stringVar' is ${typeof stringVar}`);
console.log(`The type of variable 'numVar' is ${typeof numVar}`);
console.log(`The type of variable 'bolVar' is ${typeof bolVar}`);
console.log(`The type of variable 'nullVar' is ${typeof nullVar}`);
console.log(`The type of variable 'undefVar' is ${typeof undefVar}`);
console.log(`The type of variable 'objVar' is ${typeof objVar}`);
console.log(`The type of variable 'arrVar' is ${typeof arrVar}`);
