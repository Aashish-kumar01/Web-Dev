// <li>TS</li>

// Created an Element
// function attach(content){
// let element = document.createElement('li');
// element.innerHTML = content;

// const element2 = document.createElement('li');
// element2.innerHTML = content+"V2.0";


// const parent = document.getElementById("root");
// parent.appendChild(element);
// parent.append(element,element2);
// }

// attach("TS");
// attach("React");
// attach("Node");  


// const element = document.createTextNode("Hello coder army");
// const parent = document.getElementById("root");
// parent.append(element);



// *************Attribute Node********************

const element = document.createAttribute("id");
element.value = "first";

// access to first list
// const curr_list = document.querySelector('li');
// curr_list.setAttributeNode(element);


// access tl second list
const parent = document.getElementById("root");
parent.children[1].setAttributeNode(element);