
// Variables Rules

// variables names are case sensitive; "a" & "A" is different.are
// Only letters, digits, underscore(_) and $ is allowed.(Not even space)
// Only letters, underscore(_) or $ should be 1st Character.
// Reserved words cannot be variable names.

// let, const & var

// var: Variable can be re-declared & updated. A global scope Variable. 
// let: Variable cannot be re-declared but can be updated. A block scope Variable. 
// const: Variable cannot be re-declared or updated. A block scope Variable. 

var avg = 45;
var avg = 65; // chuki var ko hamlog jitni baar chahe new value assign kara sakte hai
// var ko agar function ke andar define kiya jaye to usko bahar access nahi kiya jaa sakta
console.log(avg);
let fullName = "Aashish Kumar";
let age = 20;
console.log(fullName);

let std = "LKG";
// let std = "LKG"; // agar ham koi naya value assign karenge let me same variable ke liye to ye ek error dega
std = "UKG"; // lekin ham let me variable ki value ko update kar sakte hai
console.log(std); 

const accNo = 12345; 
// const accNO = 65432; // isme ham log new value assign nhi kar sakte hai
// accNo = 98765; // const me new value update bhi nahi kar sakte hai
console.log(accNo);

{
    var ab = 34;
}
console.log(ab);

{
    let ba = 65;
    console.log(ba);
}
// console.log(ba); // ham let ko block ke bahar access nhi kar sakte ye have error dega ki hamara value define hi nahi hai

{
    const av = "Aashish";
    console.log(av);
}
// console.log(av); // ham const ko block ke bahar access nhi kar sakte ye have error dega ki hamara value define hi nahi hai

