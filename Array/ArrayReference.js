let x = [1, 2, 3]
let y = x
x[0] = 1000

console.log(x)
console.log(y)

// Guess the output:
let a = [1, 2, 3];
let b = [1, 2, 3];
let c = a;


// == & ===  checks the reference here

console.log(a === b);	// False beacuse if even the elements are same the pointing array is differen as A and B			
console.log(a == b) ;
console.log(a === c);	// it becames True because a and c	both points to be same memory 		
console.log(a == c);

/* == & === are will same results here because of non-primitive data tpye 
the equality is not been checked on the basis of specific element */


