

let obj = { name : 'Naveen', wife : 'Kalai'}; // this Object

let arr = [27, 26]; //this array

 console.log(typeof obj);

 console.log(typeof arr); // result should comes obj, so the default date type of array is also comming to be an Object

// so for declearing array

console.log(Array.isArray(obj));

console.log(Array.isArray(arr)); // checks array or not then returns the boolean value 

const array = [1,2,3,4,5];

//let [a, b, c, d, e] = array;

const [_a, _b, c, d, _e] = array;

console.log(array);

