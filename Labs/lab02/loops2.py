def range_odd(start, end):
    result = []
    for i in range(start, end+1):
        if i % 2 !=0:
            result.append(i)
    return result

print(range_odd(15, 30))