function findPhoneByName(name) {
    for (let i = 0; i < phoneBook.length; i++) {
        if (phoneBook[i].name === name) {
            return phoneBook[i].phone;
        }
    }
    return "Not found";
}



const phoneBook = [
    { name: "Marcus Aurelius", phone: "+380445554433" },
    { name: "Seneca", phone: "+380123456789" },
    { name: "Epictetus", phone: "+380501234567" },
    { name: "Plato", phone: "+380671112233" },
    { name: "Aristotle", phone: "+380631234567" },
    { name: "Socrates", phone: "+380661234567" },
    { name: "Cicero", phone: "+380971112233" },
    { name: "Augustus", phone: "+380991112233" }
];

console.log(findPhoneByName("Plato"));  
console.log(findPhoneByName("HaSHiM"));
