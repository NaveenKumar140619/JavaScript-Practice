

var a = 10;

console.log(a); // Global var a -- 10

if(a==10)
  {
      const a = 20;
      console.log(a); // Inside block scope const replace the value to 20
  }
var a = 30;

console.log(a); // var is redecalred by globe variable a = 10 to a = 30 