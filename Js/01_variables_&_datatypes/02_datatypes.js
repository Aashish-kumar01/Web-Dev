// Data types in javascript

// There are total seven data types in javascript(primitve)
// number, string, boolean, undefined, null, bigint, symbol

// 1. Number
let age = 20;
console.log(typeof(age))

let marks = 88.6;
console.log(typeof(marks))

// 2. String
let fullName = "Aashish Kumar";
console.log(typeof(fullName));

// 3. Boolean
let isPass = true
console.log(typeof(isPass));

// 4. Undefined
let a;
// const b; // ham const ko undefined nahi kar sakte usko value assign karna padega nahi to error dega
console.log(a);
console.log(typeof(a));

// 5. Null
let school = null;
console.log(school);
console.log(typeof(school)); // typeof null jo hai object hota hai // ye ek error hai shuru se jab se javascript bana hai 

// 6. BigInt
let rank = BigInt("23546");
let acc = 24346463446543n; // hamlog is tarike se bhi bigint ko define kar sakte hai
console.log(acc);
console.log(rank);
console.log(typeof(rank));
console.log(Number.MAX_SAFE_INTEGER); // (2^53 -1) 64 bit me se ek hoga sign bit, 11 honge exponent bit aur, 52 honge mantisha(actual data) (ek bit hamare paas decimal ke pehle hota hai to total 53 hogaye)
console.log(Number.MIN_SAFE_INTEGER); // (2^53 -1)

// 7. Symbol
let y = Symbol("Hello!");
console.log(y);
console.log(typeof(y));

// There is a non-Primitive datatypes
// array, object, function
// Object
const student = {
    fullName: "Aashish Kumar",
    age: 20, 
    cgpa: 8.34,
    isPass: true
}

console.log(student.fullName);
// console.log(student["fullName"]);
console.log(typeof(student));

// hamlog object ke keys ki value ko update bhi kar sakte hai
student["fullName"] = "Abhishek Kumar";
student.age = student.age + 1;
student["age"] = student["age"] + 1;
console.log(student);

// ** hamne const likh karke student object banaya hai aur ham usme update kar rahe hai lekin const variable me update nhi kiya jaa sakta to iska solution ye hai ki hamko poore keys jo hai student me un sab ki value ko agar update karenge to error aayega warna nahi aayega

const obj = {
    id: 10, 
    money: 2000
}

const obj2 = {
    id: 20,
    money: 3000
}

// obj = obj2; // this line gives error kyunki ham obj ka address ko hi change kar rahe hai usko keh rahe hai ki obj2 ke address ko point kare.

// Array
let arr = [10, 20, 11, "Aashish", true];
console.log(arr);
console.log(typeof arr);

// Function
 function add(){
    console.log("Hello");
}
console.log(typeof add);
let s = function add(){
    console.log("Hello");
}
add();
s(); // hamlog isko likh karke bhi function ko call kar sakte hai.

// Primitive datatypes jo hai immutable hoti hai for example
let n = "Aashish";
n[0] = "K"; // ye change nahi hoga for the immutable reason.
console.log(n);

// Non Primitive datatypes mutable hote hai
let ar = [10, 20, 30];
ar.push(90); // ye add ho jaayega for the mutable reason.
ar[0] = 70; // ye jo hai first element ko change kar dega.
console.log(ar);