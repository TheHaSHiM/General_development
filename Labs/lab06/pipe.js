function pipe(...fns) {
    for (const fn of fns) {
        if (typeof fn !== 'function') {
            throw new TypeError('All arguments to pipe must be functions');
        }
       
    }
     return(x) => {
        let result = x;
        for (const fn of fns) {
            result = fn(result);
        }
        return result;
     }
}


const inc = x => x + 1;
const twice = x => x * 2;
const cube = x => x ** 3;


const f = pipe(inc, twice, cube);

const x = f(5);
console.log('Результат:', x);