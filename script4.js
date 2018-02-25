"use strict";

/**
 * 4*.  Нарисовать горку с помощью console.log (используя цикл for), как показано на рисунке,
 * только у вашей горки должно быть 20 рядов, а не 5:
 * 
 * ```
 * x
 * xxx
 * xxxxx
 * xxxxxxx
 * xxxxxxxxx
 * ```
 */
let string = 'x'; 
console.log(string); 
for (let i = 2; i <= 20; i++)  {
  string += 'xx'; 
  console.log(string); 
}; 