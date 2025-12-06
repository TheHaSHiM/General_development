function compose(...fns) {
    for (const fn of fns) {
        if (typeof fn !== 'function') {
            throw new TypeError('All arguments to pipe must be functions');
        }
       
    }
    fns = fns.reverse();
    const listeners = [];

    const runner = (x) => {
        let result = x;
        for (const fn of fns) {
            try {
                result = fn(result);
            } catch (error) {
                
                for (const listener of listeners) {
                    listener(error);
                }   
                return undefined;
            }
        }
        return result;
     }
     runner.on = (event, callback) => {
        if (event === 'error' && typeof callback === 'function') {
            listeners.push(callback);
        }
        };
        return runner;
}


const inc = x => x + 1;
const twice = x => x * 2;
const cube = x => x ** 3;


const f = compose(inc, twice, cube);

const x = f(5);
console.log('Результат:', x);