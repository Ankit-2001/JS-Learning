//Date() -> starts from January 1,1970 calculates in miliseconds.

let myDate = new Date();

//console.log(myDate.toString());
//Tue Apr 02 2024 05:39:40 GMT+0000 (Coordinated Universal Time)

//console.log(myDate.toLocaleString())
//4/2/2024, 5:44:03 AM

//console.log(myDate.toDateString()); //Tue Apr 02 2024

//console.log(myDate.toISOString());
//2024-04-02T05:41:34.387Z

//console.log(myDate.toJSON());
//2024-04-02T05:42:38.269Z


//To create our own date
let myCreatedDate = new Date(2024, 3, 2);
//let myDate = new Date("YYYY-MM-DD");
//let myDate = new Date("MM-DD-YYYY");
//console.log(myCreatedDate.toDateString());


let myTimeStamp = Date.now() //return in miliseconds

//to conver in second
//console.log(Math.floor(Date.now()/1000));

myDate.toLocaleString('default',{
    weekday: "long",
})