array = [1,"hi", True, 5, {}, "a", False]

counter = {"int": 0, "str": 0, "bool": 0 }

for value in array:
    if type(value) is int:
        counter["int"]+=1
    elif type(value) is str:
        counter["str"]+=1
    elif type(value) is bool:
        counter["bool"]+=1

print(counter)