/*find() method returns the value of the first element in the provided array 

that satisfies the provided testing function.

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
    
    ];
const res = car.find((item) => item.type === "XUV");
console.log(res); //{ _id: '1', name: 'Vivek' }