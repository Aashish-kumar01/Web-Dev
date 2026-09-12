let user1 = {
    name:"Aashish",
    age:20,
}

let user2 = {
    amount:20,
    money:50
}

user2.__proto__ = user1;

// console.log(user2.money);
// console.log(user2.name); // using inherit property

// const arr = [10,20,30];
// arr.__proto__ // shows the prototype of array
// console.log(arr.__proto__ == Array.prototype);
// console.log(arr.__proto__.__proto__ == Object.prototype);
// console.log(arr.__proto__.__proto__.__proto__ == null);d
// arr.__proto__.__proto__ // show the prototype of object
