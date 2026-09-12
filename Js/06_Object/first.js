// Object
// Key : value
const user = {
    0: 20, // ye bhi as a string hi consider hoga
    name: "Aashish",
    age: 20, // backend me ye "age" aise store hota hai
    emailid: "email@gamil.com",
    amount: 23521234,
    address: {
        pincode: 223423,
        city: "Kotdwar"
    },
    "home address": "Patna" // we can create like this if we want space in the term key
    // isko jab hame access karna hai to aise hi karna padega string me aur square bracket me
}
 
// console.log(user);
// console.log(typeof user);

// CRUD Operation: Create read update delete
// accessing the element
// console.log(user[0]); // accessing the first key
// console.log(user["amount"]);
// console.log(user.age);

// create value
// user.aadhaar = 24242;
// update value
// user.amount = 2342423;
// delete value
// delete user.emailid;
// console.log(user);

// Since this is an object so if we point an another object to this then it will pass_by_refrence


// Important
// accessing the keys and values of the object separately
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user)); // ye keys aur values dono print karta hai


// for(let keys in user){
    // console.log(keys);
    // console.log(keys, user[keys]);
    // user[keys] = user["name"], user["age"] etc
// } 



// creating two variable for the value of the user

// const name = user.name;
// const age = user.age;

// object ko destructure karna
// const {name,age} = user;
// const {name:username, age:Age} = user; // isme ham log naye variable bana rahe hai aur us variable ka  naam likh rahe hai username aur Age
// console.log(name, age); // ye line error dega kyunki hamne in dono ke change karke username aur Age kar diya tha
// const {name, age,...obj1} = user; // user ke bache hue key value obj1 me store ho jaayega.
// console.log(obj1);

// nested object destructure
const {address:{pincode}} = user;
console.log(pincode);


// array ko destructure karna
// const arr = [10,20,30,40,90];
// const [first, second] = arr;// yaha pe first aur second ke jagah kuch bhi likh sakte hai, agar hamko third element ko access karna hai to third likh ke access nahi kar sakte uske liye ham kuch aise const [first, second, third] kar sakte hai jisme third show karega third element
// console.log(first,second);



// for of loop direct object pe nahi lagta hai
// for of loop in a array
// isme ham values ko bhi print kar sakte hai Object.values() se aur agar dono print karna hai to Object.entries() se kar sakte hai
// for(let keys of Object.keys(user)){ // yaha pe Object.keys(user) ek array isliye isme hamlog for of loop laga paa rahe hai
    // console.log(keys);
// }

// ham isme bhi destructuring kar sakte hai
// for(let [keys, values] of Object.entries(user)){
    // console.log(keys,values);
// }



// object ke andar function bhi likh sakte hai
// const obj = {
    // name: "Abhishek Kumar",
    // age: 23,
    // emailid: "emai@gamil.com",
    // amount: 2342342,
    // greeting: function(){
        // // console.log(`CT is upcoming ${this.name}`); // yaha pe this keyword ka istemal karte taki agar is function ko kisi dusre object me use karna  hai to us object ke value ko print kare na ki isi object ke
        // return 20;
    // }
// }

// is tarike se object ke andar ke function ko call kar sakte hai
// obj.greeting();
// console.log(obj.greeting()); // isse ham function me jo return ho raha hai usko print kara sakte hai

// const user2 = {
//     name: "Rohan",
//     account: 23423423
// }

// user2.greeting = obj.greeting;
// console.log(user2.greeting());



// object ke andar object
// const obj1 = {
//     name: "Arunya",
//     age: 20,
//     emailid: "email@gmail.com",
//     amout: 2343,
//     address: {
//         city: "Patna",
//         state: "Bihar"
//     }
// }
// console.log(obj1);
// Spread operator
// const obj2 = {...obj1}; // isse ham ek copy bana rahe hai obj1 ka jisko obj2 point kar raha hai aur ye sirf one level ko handle karega nested me reference same honge
// obj2.amout = 234234; // isse obj1 me koi change nahi hoga
// console.log(obj1);


// Deep copy
// const obj3 = structuredClone(obj1);
// obj3.address.city = "Delhi";
// console.log(obj3);
// console.log(obj1);



// object ke keys ko numbers me bhi likh sakte hai
// Keys String aur Symbol ho sakte hai

// const sym = Symbol("id");
// const ans = {
//     name: "Ashutosh",
//     age: 20,
//     0: 2342,
//     23: "Akash",
//     [sym]: "Hello",
//     undefined: 30, 
//     null: "Mohan",
// }

// console.log(typeof [sym]);
// console.log(ans[sym]);
// console.log(ans.undefined);
// console.log(ans.null); 
// console.log(ans[0]);

 



