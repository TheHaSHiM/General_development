function array() {
    let ar = [];

    function inner(index) {
        return ar[index];
    }

    inner.push = function(value) {
        ar.push(value);
    };

    inner.pop = function() {
        return ar.pop();
    };

    return inner;
}

let a = array();

a.push(10);
a.push(20);
a.push(30);

console.log(a(0)); // 10
console.log(a(1)); // 20
console.log(a(2)); // 30

console.log(a.pop()); // 30
console.log(a(2)); // undefined

const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0)); // Выводит: first
console.log(arr(1)); // Выводит: second
console.log(arr(2)); // Выводит: third

console.log(arr.pop()); // Выводит: third
console.log(arr.pop()); // Выводит: second
console.log(arr.pop()); // Выводит: first

console.log(arr.pop()); // Выводит: undefined