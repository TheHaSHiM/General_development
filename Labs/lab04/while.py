def sum_while(*args):
    result = 0
    i = 0
    while i < len(args) : 
        result = result + args[i]
        i += 1
    return result

a = sum_while(1,2,3)
b = sum_while(0)
c = sum_while()
d = sum_while(1, -1, 1)
e = sum_while(10, -1, -1, -1)

print(a, b, c, d, e)