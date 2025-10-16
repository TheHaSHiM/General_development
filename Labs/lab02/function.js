function average(a, b) {
    return (a+b)/2;
}
function square(x) {
    return x**2;
}
function cube(x) {
    return x**3;
}
function calculate() {
    const result = []
    for (let i = 0; i<=9; i++) {
        const x=square(i)
        const y=cube(i)
        const a=average(x,y)
        result.push(a)
    }
    return result
}

console.log(calculate())
