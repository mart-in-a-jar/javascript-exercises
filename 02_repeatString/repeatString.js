/* function repeatString(string, num) {
    return(string.repeat(num));
}; */

function repeatString(string, num) {
    let outString = "";
    if (num < 0 || isNaN(num)) {
        return "ERROR";
    }
    for (let i = 0; i < num; i++) {
        outString += string;
    }
    return outString;
};


// Do not edit below this line
module.exports = repeatString;
