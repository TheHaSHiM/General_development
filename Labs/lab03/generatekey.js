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

function generate_key(length, characters){
    const full_length = characters.length
    let key = '';
    for (let i = 0; i<length; i++ ) {
        key += characters[random_namber(0,  full_length-1)]
    }
    return key
}

const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
const key = generate_key(16, characters);

console.log(key)