// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2);
// }
function addTwoNumbers(number1,number2){
    // let result = (number1 + number2);
    // return result;
    return number1 + number2; 
}

// addTwoNumbers(3,4);
// console.log(Number.isInteger(3));

const result = addTwoNumbers(3,5);
//console.log(result);


function loginUserMessage(username){
    return `${username} just logged in`;
}

//console.log(loginUserMessage("Ankit"));
//If pass without any argument it will give us undefined output

function calculateCartPrice(...args )/*Rest operator*/{

}

calculateCartPrice(200,300,400);
