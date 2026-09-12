// // Array:

// // let marks1 = 100;
// // let marks2 = 50;
// // let marks3 = 70;
// // let marks4 = 80;

// let marks = [100,50,70,80,90];

// console.log(marks);
// console.log(marks.length);
// let arr = [100, 30, "Aashish",true];
// console.log(arr);
// console.log(arr[0]); // access the elements of the array by index
// arr[0] = 23; // changing the elements of the array because its mutable
// console.log(arr);



// // push: Inset element at end
// arr.push(90);
// arr.push("CT");
// console.log(arr);



// // pop operation: Delete element from end
// arr.pop();
// console.log(arr);



// // Starting add kar sakte hai, Delete the element at first place
// arr.unshift(10); // adding the element at the starting
// console.log(arr);
// arr.shift(); // delete the element at starting
// console.log(arr); // delete the element at starting
                  


// // print the element of the array using for loop
// let ar = [10,30,50,90,11];
// // for(let i = 0; i<ar.length; i++){
// //     console.log(ar[i]);
// // }

// for(let num of ar){
//     console.log(num);
// }



// Object jo hote wo copy by refrence hote hai to agar do object ek hi memeory address ko refer karte hai to ek me kiye gaye change dusre me bhi ho jaate hai
// let ar1 = [10,20,50,23,11];
// let ar2 = ar1;
// ar2.push(30);
// console.log(ar1);


// const arr = [10,20,50,70,110];
// // Object(Non Primitive): Copy by refrence
// // Primitive: Copy by value
// // arr = [40,60,80,100]; // ye assignment to constant variable error dega kyunki const variable ke andar ham address ko change karne ki koshish kar rahe hai
// arr[2] = 30;
// arr.push(60);
// console.log(arr);



// // Slicing
// const arr = [10,20,50,70,110];
// console.log(arr.slice(2,4)); // ye ek naya array return karta hai



// Splice
// iska kaam hota original array se element ko hata dena aur ye ek naye array me return karta hai
// console.log(arr.splice(1,3));
// splice(starting_indes, total_element_delete, add value)
// console.log(arr);
// const arr3 = arr.splice(1,3,"Aashish",19); // ye index 1 se 3 tak element ko hata dega aur uske index 1 se element ko insert karne lagega jaise yaha pe 1 pe insert karega "Aashish"
// console.log(arr3);
// console.log(arr);



// Spread Operator
// const arr = [10,20,50,90,11];
// const arr2 = ["Aashish",11,true];
// arr.push(arr2);
// console.log(arr[5][0]);
// const arr3 = arr.concat(arr2); // ye arr2 ko arr me push kar dega aur har element alag alag push karega 
// const arr4 = [90,4,false];
// const arr3 = arr.concat(arr2,arr4);
// const arr3 = [arr,arr2,arr4];


// hamlog concat ki madad se bhi kar sakte hai lekin spread operator ki madad se asan ho jaata hai
// spread operator ka use isse ye arr3 ek naye address ko refer karta hai
// const arr3 = [...arr,...arr2,...arr4];
// console.log(arr3);



// // Join Operator
// const names = ["Aashish", "Abhishek", "Arjun"];
// console.log(names.toString());
// console.log(typeof names.toString());

// console.log(names.join(" "));



// // Simple searching
// console.log(names.indexOf("Arjun"));
// console.log(names.includes("Abhishek"));



// Sorting
// const names = ["Bhavesh","aashish","Rahul","Rohit","Gaurav"];
// // Ascending order
// names.sort();

// // Descending order
// // names.sort();
// // names.reverse();

// console.log(names);

// const a = [101,90,80,32,91];
// a.sort(); // ye jo ha wo character by character check kar ke output deta hai
// console.log(a);


// // array ko sort karna hai usko number leke na ki string consider karke ke
// const ar = [10,40,31,71,5,11];
// ar.sort((a,b) => a-b);
// // -ve: pehle a aayega fir b aayega
// // +ve: b pehle fir a aayega
// console.log(ar);



// Flattening the array
const arr = [10,30,50,[40,90,[60,19,99],11],80];
console.log(arr[3][0]); // accessing the 40
console.log(arr[3][2][1]);
// const a = arr.flat(2); // isme me jo index hai wo bata rha hai ki kitna array ke andar kitne array ko flat karna hai
// const a = arr.flat(Infinity); // isme hamne parameter me daala hai Infinit to iska matlab hai array me jitne bhi array present honger un sab ko flat kar do
// console.log(a);


const b = [10,309,"Aashish",9.3,true];
b.name = "Abhishek";
console.log(b);
console.log(Array.isArray(b));
