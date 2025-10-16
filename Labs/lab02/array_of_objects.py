def findPhoneByName(phone):
    user_input=input("Enter name: ")

    for person in phone:
        if person['name'] == user_input:
            return person['phone']
    return "Not found"


phone_book = [
    {"name": "Marcus Aurelius", "phone":"+380445554433"},
    {"name": "Seneca", "phone": "+380123456789"},
    {"name": "Epictetus", "phone": "+380501234567"},
    {"name": "Plato", "phone": "+380671112233"},
    {"name": "Aristotle", "phone": "+380631234567"},
    {"name": "Socrates", "phone": "+380661234567"},
    {"name": "Cicero", "phone": "+380971112233"},
    {"name": "Augustus", "phone": "+380991112233"}
]

print(findPhoneByName(phone_book))
