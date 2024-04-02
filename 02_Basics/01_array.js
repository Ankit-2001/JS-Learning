//array

const myArr = [0,1,2,3,4,5]; //are always resizeable
//shallow copy -> refer same reference point.
const newArr = new Array(1,2,3,4);
console.log(newArr);

//Array methods
//push() -> push the value in an array.
//pop() -> remove the last value of an array.

//arr.unshift(val) -> push the val in the beginning of an array.
//arr.shift() -> remove the first value from an array.

//arr.include(val) -> return boolean value after finding whether val is present or not.
//arr.indexOf(val) -> return first index of val present in an array and return -1 otherwise

//arr.join() -> convert array in string


//slice(st,end) -> return a new array from st to end-1;

//splice(start_idx,no of element to delete(x), val1,...) -> first it will remove x element from start_idx and then add  element with value val.