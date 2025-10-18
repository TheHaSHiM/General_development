function sum_reduce(...args){
    let result = 0;
    let i = 0;
    if (args.length > 0){
        do {
            result = result + args[i];
            i++;
        } while ( i<args.length)
    }
    return result;
}

const a = sum_reduce(1, 2, 3) ;
const b = sum_reduce(0) ;
const c = sum_reduce();
const d = sum_reduce(1, -1, 1) ;
const e = sum_reduce(10, -1, -1, -1) ;

console.log(a,b,c,d,e);