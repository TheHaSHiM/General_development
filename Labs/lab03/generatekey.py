import random 

def random_number(min, max=None):
    if max is None:
        max = min
        min = 0
    number = int(random.random() * (max - min + 1)) + min
    return number

def generate_key(length, characters):
    full_length = len(characters)
    key = ''

    for _ in range(length):
        key += characters[random_number(0, full_length - 1)]

    return key

characters = "abcdefghijklmnopqrstuvwxyz0123456789"
key = generate_key(15, characters)
print(key)


