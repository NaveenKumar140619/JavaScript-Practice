/* Multi Dimenstional Array */



// 1D Array:

let x = ['a','b','c','d'];

console.log(x[2]);

// Multi dimentional array

let y = [['a','b'],['c','d'],['e','f',['g','h']]];

console.log(y[0][0]);

console.log(y[1][1]);

console.log(y[2][2][1]); 

//Examples

let arr = [
    ['a','b','c','d','e','f'],
    ['g','h','i'],
    ['j','k','l','m','n','o','p','q'],
    ['r','s','t','u','v']
  ];

console.log( arr[1] );
console.log( arr[2][4] );
console.log( arr[3] );
console.log( arr[0][3] );
console.log( arr[3][0] );

// combined Array Method

let array = [ [1,2],3,4 ];

//Push an empty array at the end:

array.push([]);

//Add an element to that new subarray:

array[3].push([1,2]);
console.log(array);

//Remove the new subarray:

console.log( array.pop() );
console.log(array); 