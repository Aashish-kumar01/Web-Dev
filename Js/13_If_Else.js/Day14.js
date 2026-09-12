// let obj = {};

// obj.name = "Aashish";
// obj.age = 20;
// key value writable enumerable configurable
// console.log(obj);
// console.log(Object.getOwnPropertyDescriptor(obj,'name'));
// writable = true , value ko main change kar sakta hu
// obj.name = "Mohit";
// configurable = true, app apne writable enumerable aur configurable ki value ko change kar sakte hai


// let obj = {};
// Object.defineProperty(obj, 'name', {
//     value: "Aashish", 
//     // writable: false, // change nahi hoga agar kuch change karna chahe to 
//     writable: true,
//     enumerable: true, 
//     configurable: false,
// });

// obj.name = "Kashish";
// Object.defineProperty(obj, "name",{
//     writable:false,
// })
// console.log(obj);

// const obj1 = {
//     name:"Rohit",
//     age:23,
//     account_number:300001
// }

// Object.defineProperty(obj1, 'account_number', {
//     writable:false
// })
// obj1.account_number = 200001;
// console.log(obj1.account_number);

// const customer = {
//     name: "Kashish",
//     age:23,
//     account_number:123,
//     balance:20000,
// }


// name, account_number, change nahi hone chahiye
// Object.defineProperty(customer, "name", {
//     writable:false,
// })
// Object.defineProperty(customer, "account_number",{
//     writable:false,
// })
// customer.name = "Mohit";
// customer.account_number = 1001;



// Object.defineProperty(customer, "name", {
//     enumerable:false,
// })

// enumerable: jis bhi key ka enumerable true hoga, un sabko ka access hoga ya print hoga
// Inherit hoke bhi koi bhi property or key aati hai, uska enumerable true hua to wo bhi print hoga 
// console.log(customer);
// for(let key in customer)
//     console.log(key);

// let customer2 = Object.create(customer);
// customer2.city = "Haridwar";
// customer2.place = "Delhi";

// for(let key in customer2)
//     console.log(key);

// console.log(Object.getOwnPropertyDescriptor(Object.prototype, 'toString'));


// for in loop: Isko array ke sath nahi lete
// arr is an object
// 0:10,
// 1:20,
// 2:40,
// 3:12,
// 4:30,
// name:"Rohit",
// age:20,



const arr = [10, 20, 40, 12, 30];
arr.name = "Rohit";
arr.age = 20;
// array me for in loop nahi lagate hai kyunki agar kisi ne ye jo upar do likhe hue hai is tarike se arr me add karega to sab ko print karega jab ham aisa nahi chahte ki 'name', 'age' key ke tarah print ho
for(let key in arr){
    console.log(key);
}

// definedproperties hw