"use strict";

var a = [];

function SumOddEven(a) {
  var emptyArray = a;
  var OddSum = 0;
  var EvenSum = 0;

  for (i = 1; i <= 10; i++) {
    if (i % 2 != 0) {
      OddSum += i;
    } else {
      EvenSum += i;
    }
  }

  document.write('Odd numbers summation is = ', OddSum, '<br/>', 'Even numbers summation is = ', EvenSum);
}

SumOddEven();