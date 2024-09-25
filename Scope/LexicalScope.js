/*  Lexical Scope

Lexical scope is ability for a inner scope to access variables from the outer scope. 



That means inner scope is lexically bound to the outer scope. 

  */

function parent() {
    const message = "I am from parent";
  
    function child() {
      console.log(message + " Called from child function ");
    }
    child();
  }
  
  parent();
  
/* Activity */

var x = 10; // global scope

var outerFunc = function (){ // outermost function
    var y = 20;
    console.log(x + " " + y);

      var innerFunc= function (){ // innermost function
        var z = 30;
        console.log(x + " " + y + " " + z);
    }
    innerFunc();
}
outerFunc();

