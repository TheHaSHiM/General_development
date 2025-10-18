function lifetime(people) {
    const ages = {};
    for (const person in people) {
        const died = people[person].died;
        const born = people[person].born;
        const age = died - born;
        ages[person] = age;
    }
    return ages;
}

const persons = {
    lenin: { born: 1870, died: 1924 },
    mao: { born: 1893, died: 1976 },
    gandhi: { born: 1869, died: 1948 },
    hirohito: { born: 1901, died: 1989 }
};

const life = lifetime(persons);
console.log(life);
