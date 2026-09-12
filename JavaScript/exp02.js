const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
    console.log("Middleware 1 called");
    res.write("Hello World 1");
    next();
} , (req, res, next) => {
    console.log("Middlware 2 called")
    res.write("Hello World 2")
    next();
} , (err, req, res, next) => {
    // error handling middleware
    console.log("Error middleware called");
    res.end("Error Found");
} , (req, res) => {
    console.log("Middlware 3 called")
    res.write("Hello World 3")
    res.end();
})
app.listen(9000, () => {
    console.log("Server Started");
})




