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
for (let i = 2, string = 'x'; i <= 20; string += 'xx', i++)  {
  console.log(string); 
}; 