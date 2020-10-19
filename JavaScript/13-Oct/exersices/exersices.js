/* 1. Write a JavaScript program that accept two integers and
 * display the larger.Go to the editor */
/******* Start Your Code *********/


alert ('Enter two numbers and the program will display the larger for you :) ');
var firstInteger = prompt ('enter the first number');
var secondInteger = prompt ('enter the second number');

if (firstInteger > secondInteger) {

document.write('  The first number which is = ' + firstInteger);

}
else {
    document.write('      The second number which is = ' + secondInteger);
}


 /******* End Your Code ********* */




/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/



  alert ('Enter three numbers and the program will display the sign of product of them for you :) ');
var firstInteger = prompt ('enter the first number');
var secondInteger = prompt ('enter the second number');
var thirdInteger = prompt ('enter the last one');

if (firstInteger * secondInteger * thirdInteger > 0) {

document.write('         The sign is Positive    ');

}
else {
    document.write('      The sign is Negative      ');
}


 /******* End Your Code ********* */



/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */

/******* Start Your Code *********/


alert ('Enter three numbers and the program will sort them for you :) ');

var firstInteger = prompt ('enter the first number');
var secondInteger = prompt ('enter the second number');
var thirdInteger = prompt ('enter the last one');
var sortNumbers = [firstInteger , secondInteger , thirdInteger];
document.write('       The correct order of the given numbers is =   '  , sortNumbers.sort());


  
 /******* End Your Code ********* */


/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

/******* Start Your Code *********/

alert ('Enter five numbers and the program will show the largest one for you :) ');

var firstInteger = prompt ('enter the first number');
var secondInteger = prompt ('enter the second one');
var thirdInteger = prompt ('enter the third one');
var forthInteger = prompt ('enter the forth one');
var fifthInteger = prompt ('enter the last one');

var sortNumbers = [firstInteger , secondInteger , thirdInteger , forthInteger , fifthInteger];
document.write('        The largest numbers is =     '  , sortNumbers.sort(function(a, b){return b-a})[0]);
  
 /******* End Your Code ********* */



 /* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/

/******* Start Your Code *********/

alert ('Enter two numbers (x and y) the program will show "Hello World" if x greater than y , otherwise it will show "Goodbye"for you :) ');

var x = prompt ('enter the X number');
var y = prompt ('enter the Y one');

if (x>y) {
  document.write('      Hello World      ');
}
else {
  document.write('      Goodbye     ');
}


 /******* End Your Code ********* */



