def count_type(arr):
    
    count = {}
   
    for value in arr:
        if type(value) is bool:
            t = "bool"
        elif type(value) is int:
            t = "int"
        elif type(value) is str:
            t = "str"
        else:
            t = "other"

        if t not in count:
            count[t] = 0  
        count[t] += 1
    return count
    

array = [1,"hi", True, 5, {}, "a", False]

counter = count_type(array)

print(counter)