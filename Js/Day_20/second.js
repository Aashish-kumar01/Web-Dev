// const id = document.querySelector('#first');
// id.innerHTML = "Hello Moto";

// const id2 = document.querySelector('.header2');
// console.log(id2);
// id2.style.backgroundColor = "pink"; 


// const id3 = document.querySelectorAll('.header1');
// console.log(id3);
// for(i=0;i<id3.length; i++)
//     id3[i].style.color = "red";

// How to iterate over Node list
// 1: obj.forEach((val)=>{
//     console.log(val);
//     })

// 2: for(let val of obj)
//      console.log(val);



// Convert NodeList into array
// Array.from(obj)


// ***************************************

// const obj = document.getElementsByTagName('h1');

// let team = document.getElementsByTagName('li');

// How to iterate over it
// 1: for(let i = 0; i<team.length; i++)
//      team[i].style.color = "black";

// 2: for(let val of team)
//      console.log(val);


// ***************************************
// const list = document.querySelector('li');
// console.log(list.parentElement);
// console.log(list.parentNode); 


const par = document.querySelector('ul');
console.log(par);
console.log(par.childNodes);
console.log(par.children);
console.log(par.firstChild);
console.log(par.firstElementChild);   