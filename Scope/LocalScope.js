/*       Local Scope

If we want a variable to be accessible locally in the program we define it:


Within a function (Function scope  - var ) 

2.      Within a block (Block scope - let & const)
*/


function func(){
    var b = 20;   // scope within the function
    console.log("b is accessible within the function:", b);  // 10
 }
 func();
 
console.log("b is not accessible outside the function:", b );  // error
 
 
 // Activity 

 var firstName = "Kevin";


function display(){
     var lastName = "Obrain";
     console.log("FullName: " + firstName + " " + lastName );
}

display();

console.log("FullName: " + firstName + " " + lastName ); // Error

/* Block Scope

Block scope is a local scope bounded between two curly brackets {}. 

The block scope lets you limit the accessibility of all variables declared inside it. 

Variables declared using  let or const, can’t be accessed outside the curly brackets {}

  */

var a1 = 10; // variable 'a' global scope

if(a1 === 10){
   let b1 = 20;   // scope within the block ( will be same for const) not in function it was in if condition block
   console.log("b1 is accessible within the block:", b1);  // 20
}

console.log("b1 is not accessible outside the block:", b1 );  // error

/ * Activity */

var c =10;  // global variable

func ();

function func() {
  if(c==10)
    {
        var x =10; // variable var in inside function
        
       console.log(x);   // ------> ‘x’ can be accessed within the block scope

    }
  console.log(x); // ‘x’ can be accessed outside the block scope

}
console.log(x); // ‘x’ can’t be accessed outside the function scope


