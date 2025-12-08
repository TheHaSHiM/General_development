function unique(arr) {
    const uniqueArr = [];
    for (const item of arr) {
        if (!uniqueArr.includes(item)) {
            uniqueArr.push(item);
        }
    }
    return uniqueArr;
}

const result = unique([2, 1, 1, 3, 2]);
console.log(result);

const result2 = unique(['top', 'bottom', 'top', 'left']);
console.log(result2);