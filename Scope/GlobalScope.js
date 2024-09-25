/*  Global Scope

If we want a variable to be accessible anywhere in the program we define it globally.


Global scope is the outermost scope in the JavaScript.
  */

var a = 10; // variable 'a' global scope

function func(){
   console.log("a is accessible within the function:", a);
}
func();

console.log("a is accessible outside the function:", a);