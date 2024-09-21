/*  Splits a string into an array of substrings

Syntax with optional parameter:
	string.split(separator)


If separator string is omitted, then an array with the original string is returned

*/

let str = 'Naveen.S is the best Person';

let arr = str.split(' '); // sperator with space

console.log(arr);

let arr1 = str.split('') ; //seperator without space

console.log(arr1)

let arr2 = str.split('.'); //seperator with .

console.log(arr2);

//JOIN MENTOD
/*Joins an array to form a string

Syntax with optional parameter:
array.join(separator)

If separator string is missing, then default is a comma.
*/

let array = [1,2,3,4,5,6,7,8,9,10] ;

let string = array.join();

console.log(string);

let array1 = [ 'Naveen.S', 'is', 'the', 'best', 'Person' ];

let string2 = array1.join(' ');

console.log(string2);
