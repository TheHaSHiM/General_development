function removeElement(arr, element) {
    const index = arr.indexOf(element);
    if (index > -1) {
        arr.splice(index, 1);
    }
}

function removeElements(arr, ...elements) {
    for (const element of elements) {
        removeElement(arr, element);
    }
}

const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5);
console.log(array);

const array2 = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElement(array2, 'Lima'); 
removeElement(array2, 'Berlin'); 
console.log(array2);

const array3 = [1, 2, 3, 4, 5, 6, 7];
removeElements(array3, 5, 1, 6);
console.log(array3);

const array4 = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElements(array4, 'Lima', 'Berlin', 'Kiev');
console.log(array4);