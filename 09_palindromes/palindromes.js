const palindromes = function (str) {
    const alpha = "abcdefghijklmnopqrstuvwxyz0123456789";

    const cleanStr = str.toLowerCase()
    .split('')
    .filter(char => alpha.includes(char))
    .join('');

    const reverseStr = cleanStr.split('').reverse().join('');

    return reverseStr === cleanStr;
};

// Do not edit below this line
module.exports = palindromes;
