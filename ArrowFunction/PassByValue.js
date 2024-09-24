/*  passByValue
--> All the primitive data types are passed by value.

--> Boolean, number, string, null and undefined all are passed by value.

--> Any changes that we make in the passed item with not reflect in the original item

*/

function add(num){
    num = num + 10;
    console.log(num); // passed num by below delcaration // What will be the output? // the output 5+10 = 15
}

var num = 5;   //declearing the Num 5 here
add(num);
console.log(num);  // output 5, not changed num value as 15