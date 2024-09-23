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
    totalFamilyMembers : 3,
    AgeDifference : '2 years'
}

/*const totalFamilyMembers = familyMembers.totalFamilyMembers;    //  //unpacking object without destructuring
const AgeDifference = familyMembers.AgeDifference ; */

//const {totalFamilyMembers, AgeDifference} = familyMembers; ////unpacking object properties using destructuring

// console.log(totalFamilyMembers);

const {totalFamilyMembers : newVariable , AgeDifference : AgeNew } = familyMembers;

console.log(newVariable);

console.log(AgeNew);



