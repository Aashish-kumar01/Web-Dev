console.log("scope_chain.js")
function a() {
    var b = 10;
    c();
    function c() {
        d();
        function d(){
            e();
            function e() {
                console.log(b);
            }
        }
    }
}
a();
console.log(a)




// function greet1(name){
//     console.log("hello" + name);
// }
// greet1("Aashish")




// function b() {
//     let x = 10;
// }
// b();
// console.log(x)