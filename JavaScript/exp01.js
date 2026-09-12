// const express = require('express');
// const app = express();
// app.get("/", (req, res)=> {
//     res.send("Server running.")
// })
// app.listen(8000,() => {
//     console.log("Server started");
// })

// app.get("/greet/:name", (req,res) =>{
//     let name = req.params.name;
//     res.send("hello" + name);
// })

// sum of two numbers by getting params
// app.get("/sum/:num1/:num2", (req,res) =>{
//     let num1 = Number(req.params.num1);
//     let num2 = Number(req.params.num2);
//     let result = num1 + num2;
//     res.send("sum "+(result));
// })

// sum of two numbers by getting query
// app.get("/sum2", (req,res) =>{
//     let a = Number(req.query.a);
//     let b = Number(req.query.b);
//     let result = a+b;
//     res.send("Sum is "+ result);
// })

// app.post("/login", (req,res) => {
//     res.send("Login Successful");
// })



// const express = require("express");
// const app = express();
// const PORT = 8000;

// // Middleware to parse JSON body
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // POST route for login
// app.post("/login", (req, res) => {
//   const { username, password } = req.body;

//   // Just an example check
//   if (username === "admin" && password === "1234") {
//     res.send("Login Successful");
//   } else {
//     res.send("Invalid credentials");
//   }
// });

// // Start server
// app.listen(8000, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });


// request array and respond it.
const express = require("express");
const app = express();
const PORT = 3000;

let arr = [
  {id: 1, name: "Aashish", age: 20},
  {id: 2, name: "Abhay", age: 23}, 
  {id: 3, name: "Aaksh", age: 22}
]
// ye array output karega.
// app.get("/users/", (req,res) => {
//   res.send(arr);
// })
app.get("/users/:id", (req,res) => {
  // getting data from params
  let id1 = Number(req.params.id);
  // let id2 = Number(req.params.id);
  // getting data from array
  let myuser = arr.find((ele) => ele.id===id1)
  // let myuser = arr.find((ele) => ele.id===id2)
  res.send(myuser)
})

app.post("/users", (req,res) => {
  let {name,age} = req.body;

  // create a new obj -> myObj
  let myObj = {};

  // push myObj into array
})


app.listen(3000, () => {
  console.log("Server Started");
})

// 

