const currentYear = new Date().getFullYear();

const findTheOldest = function(array) {
    array.sort((a, b) => {
        if (!a.yearOfDeath) a.yearOfDeath = currentYear;
        if (!b.yearOfDeath) b.yearOfDeath = currentYear;
        return a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth ? -1 : 1;
    });
    return array[0];
};

const findTheOldestWithReduce = function(array) {
    return array.reduce((a, b) => {
        if (!a.yearOfDeath) a.yearOfDeath = currentYear;
        if (!b.yearOfDeath) b.yearOfDeath = currentYear;
        return a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth ? a : b;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
