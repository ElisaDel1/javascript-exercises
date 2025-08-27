const removeFromArray = function(array, ...arg) {
    let newArray = [];

    array.forEach((item) => {
        if (!arg.includes(item)) {
            newArray.push(item);
        }
    })

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
