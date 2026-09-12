// Reduce
// const arr = [10,20,30,40,50];

// const result = arr.reduce(callback function, initialization value)
// const result = arr.reduce((acc, curr) => {
    // acc = acc+curr;
    // return acc; 
// }, 0);
// jo bhi return ho raha hai wo acc ke andar jaa raha hai
// console.log(result);
 
 

let arr = ["orange", "apple", "banana", "orange", "apple", "banana", "orange", "grapes"];
// final result ek object ke form me chahiye
const result = arr.reduce((acc, curr) => {
    if(acc.hasOwnProperty(curr))
        acc[curr]++;
    else 
        acc[curr]=1;
    return acc;
},{});
console.log(result);
