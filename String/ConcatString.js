//Concat String method

const str1 = 'Hello';
const str2 = 'World';
const str3 = "Naveen";
console.log(str1.concat(' ', str2));
// Expected output: "Hello World"

console.log(str2.concat(', ', str1));
// Expected output: "World, Hello"

console.log(str3.concat(', ', 'is the best person.'));

//Exercise

//what is the output

console.log(3+4+'3'); //73

console.log(1+ "2" + "2"); //122

console.log(1 + + "2" + "2"); // plus before the string is converting the string to number, 
//+ + "2" will converts the string to numerical - so result- 32

console.log(+"1" + "1" + "2"); //112

console.log("A" - "B" + "2"); // NaN2

console.log("A" - "B" + 2); //NaN