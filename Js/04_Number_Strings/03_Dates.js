// const now = new Date();
// console.log(now); // it will give the time in UTC
// console.log(now.toString());
// // console.log(now.toISOString());
// // console.log(now.toLocaleString());



// // Ye saare Local time ke basis pe output de raha hai
// // console.log(now.getDay());
// // console.log(now.getDate());
// // console.log(now.getFullYear());
// // console.log(now.getMonth()); // index 0 se start hota hai
// // console.log(now.getHours());
// // console.log(now.getSeconds());



// // Days: Mon-tue(1 based)
// // Month: 0 based
// // Date(year,month,date,hour,minute,second,millisecond)
// // const now = new Date(2025,9,4,4,49,12,123);
// // console.log(now.toString());



// // Timestamp 
// // const now = Date.now(); // hame output dega time ko miliseconds me
// // 1759577232720: Timestamp
// // ye jo Date ke andar likha gaya hai ye milisecond me likha gaya hai aur iski shuruat kab se hui thi ye ham isme 0 put kar ke output dekh sakte hai
// const dates = new Date(now);
// // year / Month / Date / Hour / Minute / Second / millisecond
// const dat = new Date(2024, 5, 28, 10, 12, 45, 231);
// console.log(dat.toString());
// // const dates = new Date(0); // ye output dega ki milliseconds me time likhna kab se start hua tha
// console.log(dates.toString());
// // console.log(now);

// // Number: 0 based start honge
// // String: 1 based start honge



// Setting date components
// const d = new Date();
// d.setDate(20);
// d.setFullYear(2021);
// d.setMonth(2)
// console.log(d.toString());


// Date calculation
// const date1 = new Date();
// const date2 = new Date("2027-01-21");

// console.log(date2-date1);
// difference between is in milliseconds


// 
const date1 = new Date();
const date2 = new Date("2028-07-14T13:38:10");

const date = date2-date1;
const days = Math.floor(date/(1000*60*60*24));
console.log(days); 
const hour = Math.floor((date/(1000*60*60))%24);
console.log(hour);
const minute = Math.floor((date/(1000*60))%60);
const seconds = Math.floor((date/(1000))%60);

console.log(`Olympiics CountDown Time: Days:${days} , hour:${hour}, minute:${minute}, seconds${seconds}`);
