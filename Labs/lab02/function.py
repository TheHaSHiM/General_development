def average(a, b):
    return (a + b) / 2

def square(x):
    return x ** 2

def cube(x):
    return x ** 3

def calculate():
    result = []
    for i in range(10):
        x=square(i)
        y=cube(i)
        a=average(x,y)
        result.append(a)
    return result

print(calculate())
