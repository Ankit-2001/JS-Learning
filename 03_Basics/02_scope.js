/*Global Scope
let a = 10;
const b = 20;
var c = 30;

console.log(a);
console.log(b);
console.log(c);
*/

if(true){
    let a = 10;
    const b = 20;
    var c = 30;
}

// console.log(a);
// console.log(b);
//console.log(c);

//Browser console have different global scope than Node.

function one(){
    const username = "ankit";

    function two(){
        const website = "youtube";
        console.log(username);
    }
    // console.log(website);
    two();
}
one();

// ***** Interesting *****

addone(5);
function addone(num){
    return num+1;
}


const addTwo = function(num){
    return num + 2;
}
addTwo(5);