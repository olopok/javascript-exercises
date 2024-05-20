const sumAll = function (num1, num2) {
    let sum = 0;
    if (num1 < num2) {
        for (i = num1; i <= num2; i++) {
            sum += i;
        }
    }
    if (num1 > num2) {
        for (i = num1; i >= num2; i--) {
            sum += i;
        }
    }

    if (num1 < 0 || num2 < 0) 
        { sum = 'ERROR'; }

    if (typeof num1 != 'number' || typeof num2 != 'number') 
        { sum = 'ERROR'; }


    return sum;
};

// Do not edit below this line
module.exports = sumAll;
