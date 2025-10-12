const array = [1,"hi", true, 5, {}, "a", false];

const counter = {number: 0, string: 0, bool: 0};

for (const value of array) {
    if (typeof value === "number") {
        counter.number +=1;
    } else if (typeof value === "string") {
        counter.string +=1;
    } else if (typeof value === "boolean") {
        counter.bool +=1;
    }    
}

console.log(counter);