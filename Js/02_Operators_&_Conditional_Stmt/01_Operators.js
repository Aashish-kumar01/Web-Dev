// Operator

// Arithmetic Operator

console.log(2+4);
console.log(2-3);
console.log(3*2);
console.log(3/1);
console.log(5%2);
console.log(3**2);


// Assignment operator

// let x = 20;
// let y = 10;
// x = x+y;
// x += y;// this is same as above
// // x = x-y;
// x = x*y;
// x = x/y;
// console.log(x);


// comparison operator

let x = 10; 
let y = 20;
console.log(x<y);
console.log(x<=y);
console.log(x>y);
console.log(x>=y);
console.log(x==y);
console.log(x===y);

let a = "10";
let b = Number(a);
console.log(b);
console.log(typeof b);

let c = "121ac";
let d = Number(c);
// NaN: Not a number(Typeof it is number)
console.log(d);
console.log(typeof d); 
console.log(Number(null));
console.log(Number(undefined));
console.log(Number(true));


// Number -> String
let r = 10;
let s = String(r);
console.log(s);
console.log(typeof s);
console.log(String(true));

// Boolean convert karunga
console.log(Boolean(0));
console.log(Boolean(-2));
console.log(Boolean("Aashish"));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));

// computer science challenge
let m = 0.1;
let n = 0.2;
let o = m+n;
console.log(o);

// 1: Null is loosely equal to undefined only
console.log(null == undefined);
console.log(null === undefined);
console.log(null == 0);
console.log(null == "");
console.log(null == false);
console.log(null == true);

// <,>,<=,>=  (null --> number, undefind --> NaN)
console.log(null>=0);
console.log(null<=0);
console.log(null<0);

console.log(null>=undefined);
console.log(undefined>=0);

console.log("Aashish">"Mohit");
console.log(10>="10");
console.log(10<=true);

// Ek koi bhi type hai, usko agar mujhe compare karna hai dusre kisi type se 
// Dono number mein convert honge

console.log(null<="");

console.log(NaN == NaN);
