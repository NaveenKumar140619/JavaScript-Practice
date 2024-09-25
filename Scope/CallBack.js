/* Callback

In JavaScript, a callback is a function passed into another function as an argument to be executed later.

Callbacks make sure that a function is not going to run before 
a task is completed but will run right after the task has been completed.

*/


function bikeRepair(){
   console.log("Working on bike");
}



function callOwner(){
    console.log("Take back bike");
 }
 
 ////Now let’s pass one function as an argument to other

function bikeRepair(funcToExecuteLater){
   console.log("Working on bike");
   //once the work is done
   funcToExecuteLater();
}

function callOwner(){
   console.log("Take back bike");
}

bikeRepair(callOwner);

// Activity 

function sum(n1, n2) {
    console.log(n1 + n2);
    }
    
    function multiply(n1, n2) {
    console.log(n1 * n2)
    }
    
    function calculator(num1, num2, operation) {
    console.log(`Calculating on ${num1} and ${num2}`)
    operation(num1, num2);
    }
    
    calculator(5, 5, sum);
    calculator(5, 5, multiply); // different callback, different answer
    
    

