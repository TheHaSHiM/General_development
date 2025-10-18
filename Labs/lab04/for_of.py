def sum_for_of(*args):
    result = 0
    for i in args:
        result = result + i
    
    return(result)


a = sum_for_of(1,2,3)
b = sum_for_of(0)
c = sum_for_of()
d = sum_for_of(1, -1, 1)
e = sum_for_of(10, -1, -1, -1)

print(a, b, c, d, e)