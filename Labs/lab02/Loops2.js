function range_odd(start, end) {
    let result = [];
    for (let i = start; i<=end; i++) {
        if (i % 2 !== 0){
            result.push(i);
        }
        
    }
    return result;
}

console.log(range_odd(15, 30))