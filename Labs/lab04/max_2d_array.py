def maximum(array):
    max_val = array[0][0]
    for i in range(len(array)):
        in_array = array[i]
        for j in range(len(in_array)):
            if in_array[j] > max_val:
                max_val = in_array[j]
    return max_val

arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
m = maximum(arr)
print(m)  
