const fibonacci = function(member) {
    index = parseInt(member);
    if (index < 0) return "OOPS";
    const fib = [0, 1, 1];
    for (let i = 2; i < index; i++) {
        next = fib[i] + fib[i - 1];
        fib.push(next);
    }
    return fib[index];
};

// Do not edit below this line
module.exports = fibonacci;
