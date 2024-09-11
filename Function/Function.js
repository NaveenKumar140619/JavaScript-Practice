
/* Creating Function to print multiple lines with one call */

//direct function call - non parametric function

function myName (){

    console.log("Naveen");
    console.log("Kalai");
    console.log("Shashu")
    console.log("Baby");     
}
myName ();

// 2nd type
function formattedPrint(val) //implementing the parameter - parametric function

{
    console.log(val); //print the parameter
    console.log("-------------------");

}
/* assign the value of parameter and call the function to print the value
is called argument */
formattedPrint("4 Members in Family"); 
formattedPrint("Naveen");
formattedPrint("Kalai");
formattedPrint("Shashu");
formattedPrint("Baby");