
const simpleArray = [1,2,3,4];
for (let i=0; i < simpleArray.length; i++) {
  console.log( simpleArray[i] );
}


/* Equality operators strict equal and non strict equals
 == // Non strict
 === // Strict Equality
*/
console.log("1" == 1);
console.log("1" === 1);

console.log(true == "true");
console.log("0" == false);

//) What is the output of the following code?

const oddNoArray = [1, 3, 5];
oddNoArray[100] = 199;
console.log( oddNoArray.length ); // 101