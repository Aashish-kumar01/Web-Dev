// let a = 10;
// let b = a;
// b = 30;
// console.log(b);
// console.log(a);

// Primitive data type Vs Non Primitive data type
// Primitive data type: Immutable
// Non Primitive data type: Mutable

// Object example:
let obj1 = {
    id: 20, 
    naming: "Aashish"
}

let obj2 = obj1;
console.log(obj1);
console.log(obj2);
obj2.id = 30;


console.log(obj1);
console.log(obj2);