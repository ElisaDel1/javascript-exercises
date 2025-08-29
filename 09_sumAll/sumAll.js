const sumAll = function(firstNum, secondNum) {
    let numbers = [];

    if (firstNum < 0 || secondNum < 0 || !Number.isInteger(firstNum) || !Number.isInteger(secondNum)) {
        return "ERROR";
    } else {
        if (firstNum <= secondNum) {
            for (let i = firstNum; i <= secondNum; i++) {
                numbers.push(i);
            }
        } else {
            for (let i = secondNum; i <= firstNum; i++) {
                numbers.push(i);
            }
        }

        return numbers.reduce((acc, number) => acc + number);
    }

};

// Do not edit below this line
module.exports = sumAll;
