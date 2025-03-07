const sumAll = function(firstNum, lastNum) {
    let sum = 0;
    let isDecimal = parseInt(firstNum) !== firstNum || parseInt(lastNum) !== lastNum;
    let isNegative = firstNum < 0 || lastNum < 0;
    let isNotNumber = typeof firstNum !== "number" || typeof lastNum !== "number";
    if (isNegative || isDecimal || isNotNumber) {
        return 'ERROR';
    }
    if (firstNum < lastNum) {
        for (let i = firstNum; i <= lastNum; i++) {
            sum += i;
        }        
    } else {
        for (let i = lastNum; i <= firstNum; i++) {
            sum += i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
