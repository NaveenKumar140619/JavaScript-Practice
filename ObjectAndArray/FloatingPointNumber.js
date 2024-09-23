// Guess the Output

console.log(202.2*2); // 404.4

console.log(303.3*3); // 909.9000000000001 //certain mathematical operations like multiplication, addition,rounding value of it


/* so above is called as Floating Point Numbers 

JavaScript treats decimals as floating point numbers.


Operations like addition, multiplication, etc are subject to rounding error

*/

/* We have been given two numbers `a` and `b`, we are dividing these numbers now how to take care of the situation
when a is equal to a non zero number and b is equal to zero
 */

console.log(5/0);

// 1. What will be the output:

let a = 0;
let b = 0;
console.log(a/b);

// 2. 	What will be the output:
let c = 0;
var d;
console.log(c/d);

// 3. 	What will be the output:

const obj = {
       name: "Ravi"
}
const {x} = obj;//result unidentified, need to identify the keyvalues as property - const {name : x} = obj;

console.log(x);
