function range_return(start, end) {
    let result = [];
    for (let i = start; i<=end; i++) {
        result.push(i);
    }
    return result;
}

console.log(range_return(15, 30))