// Number
// let a = 10;
let b = 345.6821;
// console.log(b.toFixed(1)); // round of kardega jitna number diya hai jaise ki yaha pe 1 hoga
// console.log(typeof b.toFixed(1)); // return string
// console.log(b);

// console.log(b.toPrecision(5)); // ye hame return karta hai hamko kitne numbers chahiye jaise ki yaha pe 5 number return karega
// console.log(typeof b.toPrecision(5));  // return string
console.log(b.toExponential(2));
// console.log(b.toString());



// Non Primitive datatypes jo hai unko Refrence ka basis par compare hote hai 
// Primitive: Copy by value
// let a = new Number(20);
// let b = new Number(20);
// console.log(a==b);
// // console.log(a);                         
// console.log(typeof a);

// let obj1 = {
//     name: "Aashish"
// }
// let obj2 = {
//     name: "Abhishek"
// }
// let obj3 = obj1;
// console.log(obj1 == obj2); // return false due to refrence
// console.log(obj1 == obj3); // return true due to refrence


        
// Built-in Math method 
console.log(Math.E);
console.log(Math.abs(-2));
console.log(Math.PI);
console.log(Math.LN10);
console.log(Math.SQRT2);
console.log(Math.ceil(5.3));
console.log(Math.floor(5.3));
console.log(Math.log10(20));
console.log(Math.max(23,3,43,52,53,223,23));
// console.log(Math.random());
// math.random jo (0,1) ke beech ki value deta hai jisme 1 included nahi hai 0 included hai

// Math.random
// Sattebaaji ek game banata:(0-9) 
// console.log((Math.random()*10).toPrecision(1));
// console.log(Math.floor(Math.random()*10));
console.log(Math.floor(Math.random()*10+1));
// output is 1-10;
console.log(Math.ceil(Math.random()*10));
// output is 1-10;
console.log(Math.ceil(Math.random()*6));
// output is 1-6;

// return 15-25;
console.log(Math.floor(Math.random()*11)+15); 
// kitne number print karna hai = max-min
// Math.floor(Math.random()*(max-min)+min);

// OTP Generates 4 digits: 1000-9999
console.log(Math.floor(Math.random()*(9999-1000)+1000));
// Math.random() ek method isko samajhte hai
// isme ek function likha gaya hoga jo baar baar call ho raha hoga aur us function me ham kuch input le rahe honge jo ki change ho raha hoga tabhi to output har baar different aata hai
// to Math.random(); ke function ke andar ham time ko input lete hai milliseconds jo ki har baar change ho raha hai 