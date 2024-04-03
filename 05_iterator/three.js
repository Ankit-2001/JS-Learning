// const coding = ["js","ruby","java","python","cpp"];

//forEach() ->it will never return a value
// const values = coding.forEach((item)=>{
//     // console.log(item);
//     return item;
// });

// console.log(values);

//const myNums = [1,2,3,4,5,6,7,8,9,10];
//arr.filter() -> check the value and if give true then insert that element into the new array and return it.
// const newNums = myNums.filter((num) => num > 4);

//console.log(newNums);

//arr.map() -> Traverse all the elements of array and do the requirement according to the callback function and return the values in new array.
// const newNums = myNums.map((num)=> num+10);
// console.log(newNums);


//arr.reduce() -> return a value by performing all the task of call back function.

const myNums = [1,2,3];

// const myTotal = myNums.reduce(function(acc,currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc+currval;
// },0)

const myTotal = myNums.reduce((acc,currval) => acc+currval,0);

// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999,
    },
    {
        itemName: "python course",
        price: 999,
    },
    {
        itemName: "mobile course",
        price: 5999 ,
    },
    {
        itemName: "data science course",
        price: 12999,
    }
];

const priceToPay = shoppingCart.reduce((acc,item)=> acc+item.price,0);

// console.log(priceToPay);