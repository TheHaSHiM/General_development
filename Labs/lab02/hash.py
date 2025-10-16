def findPhoneByName(phone_book, name):
    return phone_book.get(name, "Not found")

phone_book = {
    "Marcus Aurelius": "+380445554433",
    "Seneca": "+380123456789",
    "Epictetus": "+380501234567",
    "Plato": "+380671112233",
    "Aristotle": "+380631234567",
    "Socrates": "+380661234567",
    "Cicero": "+380971112233",
    "Augustus": "+380991112233"
}

print(findPhoneByName(phone_book, "Seneca"))
print(findPhoneByName(phone_book, "HaSHiM"))
