/* Pass by Reference

All the non primitive data types are passed by reference.

Arrays, objects and functions all are passed by reference.

Any changes that we make in the passed item will reflect in the original item.

*/

const obj = {
    name:  "Jhon"
}
function changeName(obj){
   obj.name = "Doe";
}
console.log("Object before function call");
console.log(obj.name);

changeName(obj);

console.log("Object after function call");
console.log(obj.name);

// what will be the output 

const obj1 = {
    name:  "Jhon"
}

var copy_obj =  obj1;
console.log(obj1.name);    // What will be the output? = Jhon


copy_obj.name = "Khaby"
console.log(copy_obj.name);  // What will be the output? = Khaby

console.log(obj1.name); // What will be the output? = Khaby