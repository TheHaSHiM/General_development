function maximum(array){
    let max_value = array[0][0];
    for(let i = 0; i < array.length; ++i){
        let in_array = array[i]
        for (let j = 0; j < in_array.length; ++j){
            if (in_array[j]>max_value){
                max_value=in_array[j]
            }
        }
    }
    return max_value
}

const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
const m = maximum(arr)
console.log (m)