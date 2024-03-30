//Two types of memory

//stack(primitive)
//heap(non-primitive)

let myName = "Ankit";

let anotherName = myName;

anotherName = "Bhardawaj"
console.log(myName);
console.log(anotherName);


let user = {
    email : "user@gmail.com",
    upi: "user@ybl"
}

let user2 = user;

user2.email = "userTwo@gmail.com"
console.log(user.email);
console.log(user2.email);