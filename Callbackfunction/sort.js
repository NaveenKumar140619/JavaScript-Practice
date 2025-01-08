/*
Introduction to Sorting

sort() sorts elements of an array in-place and returns the sorted array.

The default sort order is ascending.


*/

var arr = ["Xavi", "Zaltan", "Messi", "Aguero"];
arr.sort();
console.log(arr);

var num = [1, 2, 100, 101, 1000, 1122];
num.sort();
console.log(num);

/* Demo - Sort Method with Comparator Function

We can customise how sort is done with a comparator function.

The comparator functions takes in two arguments to compare (say a and b) 
If the function returns -ve number then that means to sort a before b
If the function returns a +ve number that means to sort b before a
If it returns 0 then it means to keep the original ordering of a and b

nums.sort(function (a, b) {
if (a < b) return -1; // or any negative value
else if (a > b) return 1; // or any positive value
else return 0;
})


*/

var num1 = [1, 2, 100, 101, 1000, 1122];
num1.sort((a, b) => a - b );
console.log(num1);

var num2 = [1, 2, 100, 101, 1000, 1122];
num2.sort((a, b) => b - a );
console.log(num2);