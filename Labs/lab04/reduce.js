function sum_reduce(...args){
    let result = args.reduce((a , b) => a+b, 0);
    return result
}

const a = sum_reduce(1, 2, 3) ;
const b = sum_reduce(0) ;
const c = sum_reduce();
const d = sum_reduce(1, -1, 1) ;
const e = sum_reduce(10, -1, -1, -1) ;

console.log(a,b,c,d,e);