// use for to print 1 to 10
console.log ("-------1 to 10-------")

for(i = 1; i <= 10; i++){
    console.log(i);
    
} 

//print five table
console.log ("-------5th Table-------")

for(let i = 1; i <= 10; i=i+1){
    console.log('5' + " * "+ i + ' = ' + (i*5));
    
}
console.log ("-------Odd Number-------")
//print odd number

for(i = 1; i <= 30; i+=2){
    console.log(i);
    
}
console.log ("-------Even Number-------")
// print even number

for(i=2;i<=20;i+=2){
    console.log(i);
    
}

//Repeating your favorite song thrice with the appropriate message :

for (let i=1; i<=3; i++) {
    console.log(`Favorite Song Repeat # ${i}`);
  }
  
// What will be the output here?   Will both loops show the same value? 

for (let x = 0; x < 3; x++){
    console.log( x );
}
for (let y = 0; y < 3; ++y){
    console.log( y );
}