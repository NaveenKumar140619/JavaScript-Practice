
/*
Create a new empty array and set the following elements in the array at the given indexes
[0] - 1 
[1] - "Hello" 
[2] - null
[3] - true 
[4] - "Piotr"

Print only the second value of this array.
Change the value of the 4th index of the array, and set it to your name.
Print the new array.
*/

let arr=[] ; // empty array
arr[0]=1;
arr[1] = "Hello"; 
arr[2]= null;
arr[3] = true ;
arr[4] ="Piotr";
//arr[4]="Naveen" // Change the value of the 4th index of the array, and set it to your name

console.log(arr[2]);
console.log(arr[4]='Naveen'); // also assign the array index and print in console statement
console.log(arr.length);
arr[70] = 'new element' // in between the index of array 4 to 70 empty lets see what prints
console.log(arr);
 
const Array = [1,2,3,4,5,6];
Array[2] = 33; // it is allowed since we are changing only specific array
// Array = [11,22,33,44,55,66] - this not allowed in the array const since this is reassignment
console.log(Array);

// What is the output of the following code snippet?
 let letterArray = ['a','b','c','d','e','f'];
 const anotherLetterArray = letterArray;
 letterArray = [];
 console.log(anotherLetterArray);
