//singleton -> form using constructor
//Object.create();



//object literals

const mySym = Symbol("key1");

const JsUser = {
    name: "Ankit",
    [mySym] : "mykey1",
    age: 22,
    location: "bangalore",
    email: "ankit@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
};
// console.log(JsUser.email);
// console.log(JsUser["email"]);
//console.log(JsUser[mySym]);

//Object.freeze(JsUser)
//It will freeze the object and no new change will be applicable.

JsUser.greetings = function(){
    console.log("Hello JS User");
}
//console.log(JsUser.greetings);
//[Function (anonymous)]

//console.log(JsUser.greetings());
//Hello JS User
//undefined


