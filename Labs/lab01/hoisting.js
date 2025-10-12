function hoisting(b) {
    console.log(a)
    var a=b
    console.log(a)
}
const c=5;
hoisting(c)