// String
// const str1 = "Aashish";
// const str2 = 'Aashish kumar';
// const day = 11;
// const str3 = `CT is upcoming from ${day}`; // Modern way to write string
// console.log(str1, str2, str3);


const str = `Hello dosto`;
console.log(str.length);
console.log(str[0]);
// str[2] = "s"; // this will not change the str because string is immutable 
console.log(str);

let message = "Rohit Bhaiye bhut bade badmash hai. \nWo bahut gande insan hai";
console.log(message);
// escape character '\'
let comment = "Rohit Bhaiya bhut bade badmash hai. \\n bahut gande insan hai";
console.log(comment);

// upper case, lower case
console.log(str.toUpperCase()); // this will not change the original string, it returns a new string that can be stored in a variable
console.log(str.toLowerCase());



// if the substring is present or not 
console.log(str.indexOf('dos')); // it returns the index of the first character of the substring
console.log(str.indexOf('cer')); // ye -1 output dega kyunki cer is not present in the str
console.log(str.lastIndexOf("o")); // it returns index of last occurence of o else return -1
console.log(str.includes("dos")); // it returns true and false



// slice
console.log(str.slice(2, 4));
console.log(str.slice(3));
console.log(str.slice(-4));
// substring me ham negative index nahi de sakte aur slices me de sakte hai bas itna hi difference hai
console.log(str.substring(2,4));
const a = "Aashish";
const b = "Kumar";
const c = a+" "+b;
console.log(c);


// from moving left to right number convert to string if the next element is string
console.log(24+"Aashish");
console.log(24+"Aashish"+10);
console.log(24+30+"Aashish");



// replace
const st = "Hello Coder Army Coder";
console.log(st.replace("ode","iam")); // ye kewal first occurence ko replace karega
console.log(st.replaceAll("ode","iam")); // ye saare occurence ko replace kar dega



// trim
const user = "  Aashish Kumar  ";
console.log(user.trim()); // ye start aur end se spaces ko hata deta hai beech me jo spaces hai unko nahi hatata hai..
// isme .trimStart bhi use kar sakte agar kewal start se space hatana hai to aur .trimEnd bhi use kar sakte agar kewal last se space hatana hai to



// split
const names = "Aashish,Abhishek,Rahul,Abhay";
console.log(names.split(",")); // ye output ek array me return karta hai aur split ke ander ham kuch bhi daal sakte hai jiske basis par split karna hai


// New way to create string
let latestString = new String("Hello Coder Army"); // ye ek object type hai
console.log(latestString);
console.log(typeof latestString);

let num = 231;
let num2 = new Number(231);
let num3 = new Number(231);
console.log(num == num2); // yaha pe num2 jo hai wo pehle Num me convert ho raha hai fir compare ho raha hai
console.log(num2 == num3); // yaha pe num2 aur num3 dono ek object hai aur comparison dono ke address ka ho raha hai na ki value ka
