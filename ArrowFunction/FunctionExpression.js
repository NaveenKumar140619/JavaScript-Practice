//Function Declaration

console.log("----------Call Function------");


function display() {
    console.log('Hello');
}
display();  // Hello

/*

Function Expression //Function name removed over here 

function (){
    console.log('Hello)
}
*/
console.log("------Var to declear function-------");

 // function name removed and declared by variable to functon Expression

var myName = function (){
    console.log('Naveen')   // Hello
}
myName();

/* Function removed
var call = () {
    console.log('Hello');
}
call(); 

*/
// ----Arrow Function -----

console.log("----------Arrow Function---------")

var car = () => {
    console.log('Verna');
}
car(); 
