const fibonacci = function(num) {
    if (num < 1) return "OOPS";
    fib = [1, 1];
    for(let i = 1; i < num - 1; i++) {
        fib.push(fib[i] + fib[i - 1]);
    }
    return fib[num - 1];
};

// 1 1 2 3 5 8

// Do not edit below this line
module.exports = fibonacci;
