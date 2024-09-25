/*  Hoisted  

Hoisting is a JavaScript mechanism where variables and 
function declarations are moved to the top of their scope before code execution.

*/


// What we see?

console.log(a);
var a = 10; //

// What actually happens?
var b;
console.log(b);
b = 10; //undefined


/* # Variables declared with const and let are not hoisted. */

// -------------------------------------------------------------------

// What we see?

func ();

function func() {
  console.log("hello");
}

//What actually happens?

function func1() {
    console.log("hello");
  }
  
  func1 (); //hello
  
  /* # Remember “Function Declarations” are hoisted entirely. */


  // -------------------------------------------------------

//What we see?

func2 ();

var func2 = function() {
  console.log("hello");
}

//What actually happens?
var func3;

func3(); 

func3 = function() {

  console.log("hello"); //Error: Cannot access 'func' before initialization

}

/* # Remember “Function Expressions” are hoisted partially. */

  // --------------------------------------------

  //What we see?

func4 ();

let func4 = function() {
  console.log("hello");
}

// What actually happens? (As let/const are not hoisted)

func5(); 

let func5 = function() {
  console.log("hello"); //Error: Cannot access 'func' before initialization

}

/* # Remember “let and const” are not hoisted. */ 