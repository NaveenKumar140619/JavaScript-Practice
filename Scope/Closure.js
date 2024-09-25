/* Closures

Closure = Function + Lexical Environment

If a function is created inside another function, it retains access to the scope of that outer function even after that outer function returns, because the outer function is in the lexical scope of the function.
  */


function parentFunction() {
    //Lexical Scope of childFunction() START
    const message = "Hi! I'm a message from parent";
  
    function childFunction() {
      console.log(message);
    }
  
    return childFunction;
    //Lexical Scope of childFunction() END
  }
  
  const ans = parentFunction();
  ans();
  
  
// Activity 


function multiply(storedNum) {
    return function(num) {
        return storedNum * num;
    }
}

const multiplyTwo = multiply(2);
const multiplyThree = multiply(3);
const multiplyFour = multiply(4);

console.log(multiplyTwo(5));
console.log(multiplyThree(6));
console.log(multiplyFour(7));

