"use strict";

/**
 * Функция проверяет, является ли число простым.
 * @param {number} arr[0] проверяемое число.
 * @param {number} arr[1] максимальный делитель. 
 * @returns {boolean} возвращает false если число не простое, иначе true.
 */
let isSimple = (arr) => {
  // начальное значение счетчика 
  let i = 2; 
  // в диапазоне от начального значения до максимального делителя 
  while (i <= arr[1])  {
    // если нет остатка от деления на делитель, и 
    // при этом делитель не равен 1 и проверяемому числу 
    if ((arr[0] % i) === 0 && i !== 1 && i !== arr[0])  {
      // число не простое
      return false; 
    };
    i++; 
  };
  // число простое
  return true; 
};

/**
 * Функция возвращает массив чисел после проверки каждого числа на 
 * условие (простое или нет).
 * @param {number} min стартовое число проверяемого диапазона.
 * @param {number} max последнее число проверяемого диапазона. 
 * @returns {array} returnArray массив простых чисел.
 */
const arrayOfNumbers = (rangeOfSearch) => {
  // пустой массив, который будет заполнен простыми числами
  let returnArray = []; 
  let i = rangeOfSearch[0]; 
  while (i <= rangeOfSearch[1])  {
    // проверяем, является ли i простым числом 
    if (isSimple([i, Math.sqrt(rangeOfSearch[1])]))  {
      // дополняем массив простых чисел еще одним 
      returnArray.push(i); 
    }; 
    i++; 
  }; 
  return returnArray; 
};

// задаем исходный диапазон, в котором будем искать простые числа
let range = [0, 100]; 
console.log(`массив простых чисел в диапазоне \
  от 0 до 100: ${arrayOfNumbers(range)}`); 