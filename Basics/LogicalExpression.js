/* Logical Expressions ( &&, || )

&& - AND = Return true if both the conditions are true and if the first condition is false 
it will not check second

|| - OR = Returns ture if any of the conditions are true and if the first conditon is true, 
it will not check second condition

Bellow is the Example
*/

let a = 10; // Variable a and b decleared and value assigned 
let b = 20;

console.log(a!==b && a>b); 
// A not equals to B and A less than B

console.log(a!==b || a<b); 
// A not equals to B OR A greater than B
