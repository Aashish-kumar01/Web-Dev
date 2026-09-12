// The 'this' keyword in JavaScript is a special keyword that refers to the context in which the current code is begin executed.
// Its value depends on how the function where 'this' is used is called.


// 1: Global context (Outside any function)
// In browsers: window,
// In Node.js Module's exports object


// 2: Inside a Function
// i: (Non-Strict Mode)
// when 'this' is used inside a regular function, it refers to the global object 
// ii: Strict Mode
// 'this' will be undefined inside a function.
// "use strict"

// a = 10;
// console.log(a);


// let obj = {
//     name:10
// }

// Object.freeze(obj);
// obj.name = 30;
// console.log(obj);


// 'this' will be undefined inside a function.
// "use strict"

// function greet(){
//     console.log(this);
// }

// greet();
// window.greet();


// ************************************************
// 3: Inside a Method (Object Context)
// when this is used inside an object's method, it refers to the object that 

// const obj = {
//     name: "Rohit",
//     age: 20,
//     greet: function(){
//         console.log(this);
//     }
// }

// obj.greet();




// **************************************************
// Arrow function don't have their own 'this'.
// Intead, they inherit 'this' from the surrounding ( lexical) scope.







// Inside a Constructor or Class
// In constructors and classes, 'this' refers to the instance of the object being created.


// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
// }

// let a = new Person("Rohit", 20);
// console.log(a);



let greet = ()=>{
    console.log(this);
}

greet();