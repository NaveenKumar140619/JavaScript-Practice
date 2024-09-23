/* Create an object of car which has three properties:
color
type
capacity
Create an vehicle array having 3 such type of objects.
 */

var car = [
{
    color : 'red' ,
    type : 'seadan',
    capacity : '4 Seater' ,
    name : 'Shift'
},

{
    color : 'Black' ,
    type : 'XUV',
    capacity : '4 Seater' ,
    name : 'Thor'
},

{
    color : 'Silver' ,
    type : 'HatchBack',
    capacity : '7 Seater' ,
    name : 'Innova'
}

]

console.log(car[1]);
console.log(car[0].name);
console.log(car[2]['type']);

const requiredCar = car.find((vechile) => vechile.name === 'Thor');

console.log(requiredCar);


