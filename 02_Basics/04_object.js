/*Singleton Object
const user = new Object();
console.log(user);
*/
const  user = {}

user.id = "123";
user.name = "Ankit";
user.isLoggedIn = false;

const regularUser = {
    email: "ankit@email.com",
    fullname:{
        userfullname:{
            firstname: "Ankit",
            lastName: "Kumar",
        }
    }
}

const obj1 = {1: "d", 2: "b"};
const obj2 = {3: "c" , 4: "d"};

// const obj3 = Object.assign({},obj1,obj2); //assign() -> return object from all source to new object.
//console.log(obj3);

// const obj3 = {...obj1,...obj2};
//using spread operators.
// console.log(obj3);

//console.log(Object.keys(user)); 
//return an array of all the keys of the given object

// let values =  Object.values(user);
//Return an array of all the values of the given object.
// console.log(values);

//let newArr = Object.entries(user);
//Return an nested array with children array have key and values as an element.

//let output = obj_name.hasOwnProperty(property_name) -> return true or false;


const course = {
    coursename: "JS",
    price: "399",
    courseInstructor: "Ankit",
}

// const {courseInstructor} = course;
// console.log(courseInstructor);