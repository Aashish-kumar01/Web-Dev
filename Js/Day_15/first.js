// for of loop
// const arr = [10,20,11,18,13];
// for(let value of arr)
// {
//     console.log(value);
// }
// let str = "Rohit is Good Boy";
// for(let value of str)
// {
//     console.log(value);
// }



// don't use (for of) loop in object
// const obj = {
//     name:"Chhavi",
//     age:22,
//     gender:"female"
// };
// for(let value of obj){ // ye error dega kyunki object iteratable nahi hota hai
//     console.log(value);
// }


// agar hamko for of loop hi use karna hai array me to
// for(let value of Object.keys(obj))
//     console.log(value, obj[value]);



// ForEach :- ye kuch bhi return nahi karta
// let arr = [10,12,39,49,13];
// arr.forEach(num =>{ // foreach ek callback function expect karta hai
//     console.log(num);
// })
// let arr = [10,12,39,49,13];
// arr.forEach((num, index, a) =>{
//     a[index] = num*2;
// });
// console.log(arr);


// call back function
// function names(fun){
//     console.log("Hello I am name");
//     fun();
// }
// function greet(){
//     console.log("I am call back function");
// }
// names(function greet(){
//     console.log("I am call back function");
// });
// names(() => {
//     console.log("I am call back function");
// });
// names(greet);



// function fetchData(){
//     console.log("I am fetching data");  
// }
// setInterval(fetchData, 5000);



// filter
// let arr = [10,27,33,41,50];
// const result = arr.filter((num) => {
//     return num%2 == 0;
// });
// console.log(result);



// const students = [
//     {name:"Rohan", age:22, marks:70},
//     {name:"Mohan", age:24, marks:80},
//     {name:"Darshan", age:28, marks:30},
//     {name:"Mohit", age:32, marks:40},
//     {name: "Shadik", age:12, marks:90},
// ];
// const result = students.filter((obj) =>{
//     return obj.marks >50;
// });
// const result = students.filter((value) => value.marks>50);
// const result = students.filter(({marks}) => marks > 50)
// console.log(result);

// forEach me value ko keval filter kar sakte kisi condition ke basis pe



// Map :- isme ham value ko modify kar ke bhi return kar sakre hai  
// const arr = [1,2,4,5]
// const result = arr.map((num) => {
//     return num*num
// });
// console.log(result);
 


// using filter and map (chaining)
// const arr = [1,2,3,4,5,6];
// const result = arr.filter((num) => num%2 == 0).map((num) => num*num);
// console.log(result);



// Reduce, HW...