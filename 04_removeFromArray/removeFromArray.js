// ONE PARAMETER TO REMOVE
/* const removeFromArray = function(array, valueToRemove) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === valueToRemove) {
            array.splice(i, 1);
        }
    }
    return array;
}; */

/* function removeFromArray(array, valueToRemove) {
    return (array.filter(value => {
        return value != valueToRemove;
    }))
} */

// OPTINAL NUMBER OF REMOVAL ARGUMENTS
// Iterate backwards to not mess with indexes when removing items
/* function removeFromArray(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        for (let j = 1; j < arguments.length; j++) {
            if (array[i] === arguments[j]) {
                array.splice(i, 1);
            }
        }
    }
    return array;
} */

// Get array from arguments
// Filter
function removeFromArray(...args) {
    return args[0].filter(value => {
        return !args.includes(value)
    })
}

// Append to new array
/* function removeFromArray(...args) {
    const newArray = [];
    args[0].forEach(element => {
        if (!args.includes(element)) {
            newArray.push(element);
        }
    })
    return newArray;
} */

// Do not edit below this line
module.exports = removeFromArray;
