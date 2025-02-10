const removeFromArray = function(array, ...args) {
    let filteredArray = [];
    next: for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < args.length; j++) {
            if (args[j] === array[i]) { 
                continue next;
            };    
        };                 
        filteredArray.push(array[i])
    };
    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
