
/*  Difference Parameter Vs Argument

function welcomeMessage(param){ --------> parameter
    console.log(param);
}

var argument = "adieu!" ;

welcomeMessage(argument); ----------------> Argument
welcomeMessage(argument); */


/* Write a simple parametric function to print a user-specific Welcome message to the console

call the function with different user names as arguments */

function welcomeMessage(name){
    console.log("Hi " + name + "," + " welcome, Thanks for opening the account in our bank.")
}
welcomeMessage("Naveen");
welcomeMessage("kalai");
welcomeMessage("Shashu");