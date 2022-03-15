const palindromes = function (string) {
    const strippedString = string.toLowerCase().replace(/[^a-z0-9æøå]/g, "");
    const reversedString = strippedString.split("").reverse().join("");
    return strippedString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
