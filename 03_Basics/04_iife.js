//Immediately Invoked Function Expressions(IIFE) -> used to prevent/reduce global scope problem.

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
})();

( ()=> {
    console.log('DB CONNECTED TWO');
})();