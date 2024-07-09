/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

const cars = [
  {
    carBrand: "BMW",
    price: 100_000,
    isAvailableForSale: true,
  },
  {
    carBrand: "audi",
    price: 300_000,
    isAvailableForSale: false,
  },
  {
    carBrand: "opel",
    price: 70_000,
    isAvailableForSale: true,
  },
];

console.log(cars.length);

const myCar = {
  carBrand: "mercedes",
  price: 120_000,
  isAvailableForSale: true,
};

cars.push(myCar);

console.log(cars);
