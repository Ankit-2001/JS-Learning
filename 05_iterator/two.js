//for of

const arr = [1,2,3,4,5];

// for (const num of arr) {
//     console.log(num);
// }

const greeting = "Hello world!";
//for (const greet of greeting) {
    //console.log(`Each char is ${greet}`);
//}

//Maps -> unique values
const map = new Map();
map.set('IN', "India");
map.set('USA', "United states of Americs");
map.set('Fr',"France");

// console.log(map);
// for(const [key,value] of map){
//     console.log(key,':-' ,value);
// }

const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman',
}

// for (const [key,value] of myObject) {
//     console.log(key,':-' ,value);
// }
//for..of loop is not iterable in objects.


//for..in -> used for object
// for (const key in myObject) {
//     console.log(`${key} is ${myObject[key]}`);
// }

const programming = ["js","py","rb","java"];

//using for..in loop in array give us key 
// for(const key in programming){
//     console.log(programming[key]);
// }


//for..each

const coding = ["js","ruby","java","python"];

// coding.forEach( function (item){
//     console.log(item);
// });
// coding.forEach( (item) => {
//     console.log(item);
// })

// coding.forEach( (item,index,arr) => {
//     console.log(item,index,arr)
// })


const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach((item) =>{
    console.log(item.languageName);
});