def lifetime(people):
    ages = {}
    for person in people:
        died = people[person]["died"]
        born = people[person]["born"]
        age = died - born
        ages[person] = age
    return ages


persons = {
  "lenin": { "born": 1870, "died": 1924 },
  "mao": { "born": 1893, "died": 1976 },
  "gandhi": { "born": 1869, "died": 1948 },
  "hirohito": { "born": 1901, "died": 1989 }
  }

life= lifetime(persons)

print(life)