/* Template String is the special thing to makes creating complex string eaiser

previously declare the String with single quoates '' and double quotes " ", for next line \n for Tab \t

but in this Template String Enclosed the String with Backtats (``) to make all easier bellow is the example */

var a = 4;
var b = 5;
var str = `This is String
next line   this is Tab adding variable ${a} ${b} ${a+b}` // adding variable and assignment without concatenated like 

console.log(str + " " + a); // this concatenate

console.log(str);

