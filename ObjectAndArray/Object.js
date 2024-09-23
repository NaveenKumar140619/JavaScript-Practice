// Using Objects literals

let obj = {}; // empty properties Objects

let familyMembers = {
    myName : 'Naveen',
    age : 25 ,
    occupation: 'IT Engineer',
    company : 'Tata Consultancy services',
    'Home Address' : 'Bangalore',
    elderBrother1 : {
    name : 'Madhan',
    age : 29,
    occupation: 'IT Engineer',
    company : 'Tata Electonics',
    'Home Address' : 'Krishnagiri',
     }, elderBrother2 : {
    name : 'Ajith',
    age : 27,
    occupation: 'Doctor',
    company : 'Own CLinic',
    'Home Address' : 'Kelamangalam',
    },
}

//1. Dot Notation

console.log(familyMembers.elderBrother1.name);

console.log(familyMembers.elderBrother2.name);

//console.log(familyMembers.''Home Address');in dot notation method can't get values with quotes 
//so we use 2nd Method

//2.square bracket Notation
console.log(familyMembers['elderBrother1']['name']); //line 28 and this are same but method different

console.log(familyMembers['Home Address']);