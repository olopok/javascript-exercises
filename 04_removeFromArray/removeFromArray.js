const removeFromArray = function(array1, value1, value2, value3, value4) {
    let i = 0;
    while (i < array1.length) {
        if (array1[i] === value1 || array1[i] === value2 || array1[i] === value3 || array1[i] === value4) {
            array1.splice(i, 1);
        } else ++i;
    } return array1;
}

// Do not edit below this line
module.exports = removeFromArray;
