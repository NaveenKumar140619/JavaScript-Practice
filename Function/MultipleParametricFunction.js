/* Write a parametric function multiply (x, y) that Takes two parameters x and y,
 and print the product of two numbers to the console */ 

 function multipleFunction (x,y){
console.log(x*y);
 }
 multipleFunction(7,8);
 multipleFunction(9,8);
 multipleFunction(9,7);

 /* we can pass values into a function with arguements,
 we can use a return statement to send a value back out of a function, Below is the Example */

 function multiply(x,y){
    console.log(x+y);
       return (x*y);
 }

const answer = multiply(5,5);
console.log(answer);
