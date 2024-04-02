const user = {
    username: "Ankit",
    price: 99,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

// console.log(this);
// {} -> current context in node;
// window {} in browser console.

// function chai(){
//     console.log(this);
// }
// chai();

// const chai = function(){
//     let username = "Ankit";
//     console.log(this.username);
//     undefined output
// }
// chai();

// const chai = () => {
//     let username = "Ankit";
//     console.log(this);
// }
// chai();


// const addTwo = (num1,num2)=>{
//     return num1 + num2;
// }

const addTwo = (num1,num2)=> num1 + num2;//Implicit return
//console.log(addTwo(3,4));