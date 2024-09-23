
let array = [['Naveen','Kalai'], ['Umar', 'Heena'], ['IT Company', 'AJ Fashion'] ];

for (let i = 0; i < array.length; i++){

    for(j = 0; j < array[i].length; j++){
    
        console.log(array[i][j]);
        
       // console.log(`[${i} ${j}] = ${array[i][j]}`);

    }

}

console.log("------------------------------");

let arr = [['1','2'], ['3', '4'], ['5 ', '6'] ];

function printArray(arr){

for (let i = 0; i < arr.length; i++){

    for(j = 0; j < arr[i].length; j++){
    
        //  console.log(array[i][j]);
        
        console.log(`[${i} ${j}] = ${arr[i][j]}`);

    }

  }
}printArray(arr)