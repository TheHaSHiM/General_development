function count_type(array) {
    const count = {}; 

    for (const value of array) {
        let t;

        if (typeof value === "boolean") {
            t = "bool";
        } else if (typeof value === "number") {
            t = "number";
        } else if (typeof value === "string") {
            t = "string";
        } else {
            t = "other";
        }

        if (!(t in count)) {
            count[t] = 0;
        }

        count[t] += 1;
    }

    return count;
}

const array = [1, "hi", true, 5, {}, "a", false];

const counter = count_type(array);

console.log(counter);
