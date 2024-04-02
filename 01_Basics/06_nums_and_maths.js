const balance = new Number(100);
//[Number: 100]

//toFixed(n) -> to take only n value after decimal place.

//toPrecision(n) -> return string with n length of string.



//******  Maths  *****/

//Math.abs() -> give absolute valu

//Math.round() -> round off 

//Math.ceil(val) -> return  integer greater than or equal to val
//Math.floor(val) -> return integer small than or equal to val

//Math.random() -> return real number between 0 to 1 where [0,1)

const min = 50;
const max = 60;

console.log(Math.floor(Math.random()*(max-min+1))+min);