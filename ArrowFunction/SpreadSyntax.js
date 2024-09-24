/*
Spread Syntax(...)

Spread syntax can be used when all elements from an object or array need to be included in a new array or object.

If any changes are made in the new object or array  those will not reflect in the original object or array.

*/


const obj = {
     name:  "Lame"
}

var copy_obj =  {...obj};

console.log(obj.name);    // What will be the output?

copy_obj.name = "Khaby"

console.log(copy_obj.name);  // What will be the output?

console.log(obj.name);    // What will be the output?

