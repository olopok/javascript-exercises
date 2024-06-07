const palindromes = function (s) {
    let arr1 = s.toLowerCase();
    arr1 = arr1.match(/\w/ig);
    arr1 = arr1.join('');
    arr2 = arr1;
    arr2 = arr2.split('').reverse().join('');
    return arr1 === arr2;
};

// Do not edit below this line
module.exports = palindromes;
