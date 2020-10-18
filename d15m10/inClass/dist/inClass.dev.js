"use strict";

/*

function oddArray (arr) {

    var arr= [1 , 2 , 3 , 4 , 5 , 6];
    var array = [];
var arrLength = arr.length;
var odd = [] ;

for (i=0 ; i <= arrLength ; i++) {

if (i % 2 != 0 ) {
    array.push(i);

}


}
return array ;
}

var oddNumbers = oddArray() ;
document.write(oddNumbers + '<br/>');



function oddArray () {

    var arr= [1 , 2 , 3 , 4 , 5 , 6];
    var array = [];
var arrLength = arr.length;
var odd = [] ;
var i = 0;
while ( i <= arrLength ) {

if (i % 2 != 0 ) {
    array.push(i);

}
i++ ;

}
return array ;
}

var oddNumbers = oddArray() ;
document.write(oddNumbers + '<br/>');


*/

/*
function aveArray () {
 var   avAray = [1 , 2 , 5 , 6 , 4];
var AL = avAray.length;
var sumArr = 0 ;

for (i = 0 ; i <= AL-1 ; i++ ) {

sumArr += avAray[i];
}

var avNum = sumArr/AL ;
return avNum ;

}
var resultAvg = aveArray() ;
document.write (resultAvg);
*/
function factorial(n) {
  var b = parseInt(n);
  var nSum = 1;

  for (i = b; i > 0; i--) {
    nSum *= i;
  }

  return nSum;
}

document.write(factorial(5));