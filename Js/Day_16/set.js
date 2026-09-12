// set: unique value
// const set = new Set([10,20,30,40]); 
// console.log(set);


// const set1 = new Set();
// set1.add(4);
// set1.add(6);
// set1.add("Aashish");
// set1.add(30);

// delete
// set1.delete(6);
// console.log(set1.size);


// ig:id
// const user_id = new Set(["rohit_19", "Mohi_91", "ravi.93", "chavi_90", "sumit.32"]);
// let new_user = "rohit_19";
// console.log(user_id.has(new_user));


// clear
// user_id.clear();
// console.log(user_id);



// array to set and set to array
// let arr= [10,30,20,10,40,50,30];
// const set1 = new Set(arr);
// console.log(set1);
// arr = [...set1];
// console.log(arr);



// union
// let set1 = new Set([10,20,30,40,50]);
// let set2 = new Set([10,20,70,80]);

// let set3 = new Set([...set1,...set2]);
// console.log(set3);



// intersection
// let set1 = new Set([10,20,30,40,50]);
// let set2 = new Set([10,20,70,40]);

// const result = [...set1].filter((num) => set2.has(num));
// console.log(result);



// Iterate over set
// for of
// for(let value of set1)
    // console.log(value);
// for each
// set1.forEach((value) => console.log(value));

