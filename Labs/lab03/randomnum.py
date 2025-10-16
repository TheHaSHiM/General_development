import random 

def random_number(min, max=None):
    if max is None:
        max = min
        min = 0
    number = int(random.random() * (max - min + 1)) + min
    return number

print(random_number(0, 6))
print(random_number(5))
