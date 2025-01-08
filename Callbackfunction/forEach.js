/* For...Each

forEach is invoked on an array, it iterates or loops through the array.

Runs a Callback function on each value in the array.

When the loop ends forEach returns undefined.

*/

const nums = [1, 2, 3, 4];
nums.forEach((value) => console.log(value));

const arr = [1, 2, 3, 4, 5]; 
arr.forEach((element, index, array) => console.log(element, index, array));

const nums1 = [1, 2, 3, 4];
nums1.forEach((value, index) => {
  console.log("Element " + value + " is at index " + index);
});
