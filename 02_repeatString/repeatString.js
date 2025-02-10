const repeatString = function(string, num) {
    let newString = '';
    if (num < 0) return newString = 'ERROR';
    while (num--) newString += string; 
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
