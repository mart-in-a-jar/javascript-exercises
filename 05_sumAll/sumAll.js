const sumAll = function(n1, n2) {
    if (n1 < 0 || n2 < 0 || !Number.isInteger(n1) || !Number.isInteger(n2)) return "ERROR";
    let sum = 0;
    let lowNum, highNum;
    if (n1 < n2) {
        lowNum = n1;
        highNum = n2;
    } else {
        lowNum = n2;
        highNum = n1;
    }
    for (let i = lowNum; i <= highNum; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;