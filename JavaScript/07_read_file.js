// let http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('kay re');
// }).listen(8080,()=>{
//     console.log("localhost:8000")
// });



// const fs = require('fs');

// const data = fs.readFileSync('function.js', "utf-8");
// console.log(data);
// console.log('Next line');
// fs.readFile("function.js", "utf-8", (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log("File contents:", data);
// });



const fs = require("fs");

const filePath = "delete.txt"; // replace with your file path

fs.unlink(filePath, (err) => {
  if (err) {
    console.error("Error deleting file:", err);
    return;
  }
  console.log("File deleted successfully!");
});


