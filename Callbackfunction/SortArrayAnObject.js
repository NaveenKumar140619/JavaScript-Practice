/*Print the names of the people in ascending order of their age.*/

const array = [
    {
      name: "Naveen",
      age: 25,
    },
    {
      name: "Kavi",
      age: 6,
    },
    {
      name: "Shashu",
      age: 5,
    },
    {
        name: "kalai",
        age: 26,
      },
  ];
  
  array.sort((a, b) => a.age - b.age);
  console.log(array);

  let resultArray =[];
  array.forEach((element) => resultArray.push(element.name));
  console.log(resultArray);