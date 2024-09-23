// CURD - create, Read, update, delete

//Object Created and properties added

let person = {
    name : 'Naveen Kumar',
    jobTitle : 'It Engineer',
    email : 'naveensmart680',
    isVerified : false,
}

// read and Print 

console.log(person.name);

//Update 

person.isVerified = true ;

// delete name and new property added

delete person.name;

// Adding new properties

person.firstName = 'Naveen';

person.MiddleName = 'Kumar';

console.log(person);

