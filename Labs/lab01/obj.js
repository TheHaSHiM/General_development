function inc(obj) {
    obj.n = obj.n + 1;
}

const obj = {n:5};
inc(obj)
console.log(obj)