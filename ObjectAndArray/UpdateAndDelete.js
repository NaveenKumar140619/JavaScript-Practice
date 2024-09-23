
let familyMembers = {

    myName : 'Naveen',
    age : 25 ,
    occupation: 'IT Engineer',
    company : 'Tata Consultancy services',
    Address : 'krishnagiri',

anotherFamily:{
NewName : 'kumar',
} 
}

familyMembers.Address = 'Bangalore' ; // it checks key is there, if yes it updates

familyMembers.MobileNumber = '967751' ; // if no, it is added new property

console.log(familyMembers);

//delete properties

delete familyMembers.anotherFamily;

console.log(familyMembers);