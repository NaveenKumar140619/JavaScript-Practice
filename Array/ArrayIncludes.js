/* Array.includes(element, fromIndex) -
Checks if array contains given element     (starting from an index - optional). 
Returns boolean value.
 */

let arr = ['Naveen', 'Kalai', 'Shashu', 'B/O Kalai'];

console.log( arr.includes('Shashu') );
console.log( arr.includes('Kalai', 2) ); // Here 2 represents the Starting Index for check, so Index 2 is Shashu,
// after that it starts to check for given argument Kalai
