
/* Arrow Function */

var familyMembers = (husbandName,wifeName) =>{
    console.log(husbandName,wifeName)
}

familyMembers('Naveen', 'Kalai');

// Normal Function VS Arrow Function

function checkEven(a,b){
    
    if(a % 2 === 0 && b % 2 === 0){
        return true;
    }else{
        return false;  
    } 
}
console.log(checkEven(2,5));

// without curly brackets to make single line code

const checkEvenWithArrow = (a,b) => a % 2 === 0 && b % 2 === 0; 
console.log(checkEvenWithArrow(4, 6)); // true
console.log(checkEvenWithArrow(4, 5)); // false
console.log(checkEvenWithArrow(3, 5)); // false


/* const checkEvenWithArrow = (a,b) =>{
    if(a % 2 === 0 && b % 2 === 0){
        return true;
    }else{
        return false;
    }

} */

