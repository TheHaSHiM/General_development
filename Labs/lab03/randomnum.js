function random_namber(min, max=null) {
    let actual_min, actual_max;
    
    if (max === null){
        actual_min = 0;
        actual_max = min;
     } else {
        actual_min = min;
        actual_max = max;
     }
        
    const number = Math.floor(Math.random() * (actual_max - actual_min + 1)) + actual_min
    return number
}

console.log(random_namber(100))
console.log(random_namber(50, 100))