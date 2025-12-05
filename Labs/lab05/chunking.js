function seq(arg) {
    let funcs = [];
    if (typeof arg === 'function') {
        funcs.push(arg);
    }

    function inner(next) {
        if (typeof next === 'function') {
            funcs.push(next);
            return inner;
        }else if (typeof next === 'number') {
            let result = next;
            for (let i = funcs.length - 1; i >= 0; i--) {
                result = funcs[i](result);
            }
            return result;
        }
    }
    return inner;
}

// Example usage:

console.log(seq(x => x + 1)(x => x * 2)(5));
console.log(seq(x => x - 3)(x => x / 2)(x => x * x)(10));
console.log(seq(x => x + 7)
   (x => x * 2)(5));
console.log(seq(x => x * 2)
   (x => x + 7)(5));
console.log(seq(x => x + 1)
   (x => x * 2)
   (x => x / 3)
   (x => x - 4)(7));