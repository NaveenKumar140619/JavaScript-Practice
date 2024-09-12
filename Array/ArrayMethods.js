/* Suppose, we want to add an element at the end of the array and remove the first element from the same array.

push() appends data to the end of an array & returns the new array length.
pop() removes the last element from an array and returns the removed element.

shift() works like .pop(), but it removes the first element of the array.
unshift() works like .push(), but adds the element at the beginning of the array. */

//examples

let arr = [1,2,3,4,5];

arr.push(6,7,8,9); // push will add end of the array element

console.log(arr);

arr.pop(); // pop will remove end of the array element

console.log(arr);

arr.unshift(0,11,12); // unshift will add begining in the array element

console.log(arr);

arr.shift(); //shift will remove begining in the array element


console.log(arr);

/*  Activity - Create a new empty array named todoDB

Write a function addTodo(item, priority) that:

Adds a new todo item to the list depending on the priority.

If the priority is 'high', then the item is added at the start, else at the end of the list */

let todoDB = [];

function addTodo(item, priority){
    if(priority === "high"){
        todoDB.unshift(item); // which is high adding in the begining
    }else{
        todoDB.push(item); // which is low adding in the end
    }
    console.log(todoDB);
}
//addTodo("Mobile watching", "low");

addTodo("playing", "high");
addTodo("TV watching", "low");
addTodo("Studying", "high");
addTodo("GYM", "high");
addTodo("PUBG", "random");
addTodo("Sleeping", "low");

