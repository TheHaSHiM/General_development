def sum_for(*args):
    result = 0
    for i in range(len(args)):
        result = result + args[i]

    return result

a = sum_for(1,2,3)
b = sum_for(0)
c = sum_for()
d = sum_for(1, -1, 1)
e = sum_for(10, -1, -1, -1)

print(a, b, c, d, e)