/* Problem Statement

Suppose we have an array of numbers arr.

let arr = [ 10, 30, 50 ];


Now we are  doubling every number in the array and storing in a new array.*/

let arr = [ 10, 30, 50 ];

let newArr = []; // storing doubles
for (let i = 0; i < arr.length; i++) {
    newArr[i] = arr[i]* 2;
}
console.log(newArr);   // [ 20, 60, 100 ]

