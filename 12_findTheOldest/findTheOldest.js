const findTheOldest = function(people) {
    const oldest = Array.from(people).sort((a, b) => {
        const currentYear = new Date().getFullYear()
        aLived = a.yearOfDeath ? a.yearOfBirth - a.yearOfDeath : a.yearOfBirth - currentYear;
        bLived = b.yearOfDeath ? b.yearOfBirth - b.yearOfDeath : b.yearOfBirth - currentYear;
        return aLived > bLived ? 1 : -1;
    });
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
