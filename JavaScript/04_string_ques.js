
console.log("cat".indexOf("a"))

var s = "dog"
console.log(s.charAt(1))

var p = "pen"
let q = p.length
console.log(p.charAt(q-1))
console.log(p[q-1])

c = "carpet"
console.log(c.substring(0,3))

let l = "sun"
console.log(l.substring(0,3))
// let l = "sun"
// l.slice(0,3)

let b = "book"
let ans = b.substr(1,2)
console.log(ans)

let text1 = "    hi   "
// let text2 = text1.trim()
// console.log(text2)
console.log(text1.trim())

let col = "red,blue,green"
// console.log(col.split(","))
console.log(col.split(",").join(" ").replace("red", "yellow"))
console.log("red,green,blue".split(","))

let t = "I like tea"
// let b = t.replace("tea", "coffee");
console.log(t.replace("tea", "coffee"))
// console.log(b)