 /* if inside the String the sentence should have the quote like
let str = 'hey what's up '  - Here the String declared and ends with 'hey what' others undeclared
in this case we have to use different quotes for opening and close based on the sentences quotes
Below is the examples */

let str = "Hey what's up" 
let str2 = 'Hey, buddy "what are you doing"? come on buddy.'
let str3 = 'Hey, buddy "what are you doing"?\\ \\\\ come on buddy.\n ok will go for\n play \t cricket' 
//for back slash when we are giving double it prints half of it in between sentence i will give \\ it prints \ - single 
// \n next line, \t tab to give space
console.log(str);
console.log(str2);
console.log(str3);
console.log(str.length); // .length property after the String variable or literal
// gives the total length of the String by starts as 1 as first character
console.log(str.charAt(4)); // charAt(4) gives the index with the String, Index String by starts as 0 as first character
console.log(str[4]); // similar process of indexing with square bracket