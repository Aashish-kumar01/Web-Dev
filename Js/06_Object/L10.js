// implementation of array like object
// const obj = {
//     0:20, 
//     1:50, 
//     2:70,
//     length:3
// }

// const arr = [20,50,70];
// console.log(arr.length, obj.length);

// creating object
// const person = new Object();

// property add
// person.name = "Aashish";
// person.age = 30;
// person.gender = "Male";
// console.log(person);
// delete
// delete person.age;
// Modify
// person.name = "Karan"; // agar 'key' exist karta hai to update ho jaayega 'value' nahi to naya (key,value) add ho jaayega object me

// third method to create object
// class People{
//     constructor(name, age, gender){
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//     }
// }

// let per1 = new People("Aashish", 20, "Male");
// console.log(per1);


// assign use case
const obj1 = {a:1, b:2};
const obj2 = {c:3, d:4};

const obj3 = Object.assign({},obj1,obj2); // yaha pe ek empty object dena jaruri hai kyunki ye saare ko object ke keys value ko first wale object me daale deta hai aur usko new object me return kar deta hai isliye agar first pe hamara koi object jo!=null objecct to usme changes ho jaayenge 
console.log(obj3);