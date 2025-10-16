function findPhoneByName(phoneBook, name) {
    if (phoneBook[name]) {
        return phoneBook[name];
    } 
    else {
        return "Not found";
    }

}

const phoneBook = {
    "Marcus Aurelius": "+380445554433",
    "Seneca": "+380123456789",
    "Epictetus": "+380501234567",
    "Plato": "+380671112233",
    "Aristotle": "+380631234567",
    "Socrates": "+380661234567",
    "Cicero": "+380971112233",
    "Augustus": "+380991112233"
};

console.log(findPhoneByName(phoneBook, "Plato"));
console.log(findPhoneByName(phoneBook, "HaSHiM"));
