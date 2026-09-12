// let age = 20;
// if(age>=18)
// {
//     console.log("Eligible for vote");
// }
// else 
// {
//     console.log("Not Eligible for vote");
// }


// Multiple condition: Switch
// yaha pe check (===) hota hai matlab type bhi consider hota hai
// switch(new Date().getDay())
// {
//     case 0:
//         console.log("SUNDAY");
//         break;
//     case 1:
//         console.log("MONDAY");
//         break;
//     case 2:
//         console.log("TUESDAY");
//         break;
//     case 3:
//         console.log("WEDNESDAY");
//         break;
//     case 4:
//         console.log("THURSDAY");
//         break;
//     case 5:
//         console.log("FRIDAY");
//         break;
//     case 6:
//         console.log("SATURDAY");
//         break;
//     default:
//         console.log("Not a valid Day");
// }

// loop: ek hi kaam ko baar baar karna
// for(let i = 0; i<20; i++){ // yaha pe 'let' hi likhna hai 'const' nahi likh sakte hai
    // console.log("Hello Coder Army");
// }

// sum of first n numbers: 10 number
// let sum = 0;
// for(let i = 1; i<=10; i++){
//     sum+= i;
// }
// console.log(sum);



// for(let j = 0; j<6; j++){
//     for(let i = 1; i<=5; i++)
//     {
//         console.log(i);
//     }
// }

// Scope ke baare mein
// Global scope, local scope(functional scope), Block scope(loop, if else)

// let amount = 20; // global scope
// if(true){ // aise likh sake 
//     let amount = 30; // block scope
//     console.log(amount);
// }
// console.log(amount);

// function ko define karne ke pehle call kar sakte hai aise
// greet();
// function greet(){
//     console.log("Hello Greet");
// }

// lekin aise call nahi kar sakte pehle
// meet(); // ye error dega
// const meet = function(){
//     console.log("Hello Meet");
// }


// while loop
// let i = 1;
// while(i<6)
// {
//     console.log(i);
//     i++;
// }


// do while loop
// let arr = [10,30,40,60];
// for(let i = 0; i<arr.length; i++)
// {
//     console.log(arr[i]);
// }


const obj = {
    name:"Aashish",
    age: 20,
    amount:4239,
    city:"Patna"
}



// const key = Object.keys(obj);
// ['name', 'age', 'amount', 'city']
// for(let i = 0; i<key.length; i++)
// {
//     console.log(obj[key[i]]);
// }

// for in loop :- for in loop inherit wali properties ko bhi access karata hai aur khud ki properties bhi
// for(let key in obj)
// {
//     console.log(key, obj[key]);
// }

// Object.keys(obj)
let obj2 = Object.create(obj);
obj2.money = 420;
obj2.id = "Ak";
// console.log(obj2);

// console.log(Object.keys(obj2)); // aise me inherit wali keys print nahi hoti jo keys obj2 ke paas hai wahi print hongi
for(let key in obj2) // aise print karne inherit wali keys bhi access hoti hai
{
    console.log(key);
}