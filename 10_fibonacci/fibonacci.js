const fibonacci = function (n) {

    let fArr = [0, 1];

    if (n <= -1) {
        return "OOPS";
    }
    else {
        for (i = 1; i <= n - 1; i++) {
            fArr.push(fArr[i] + fArr[i - 1]);
            console.log(fArr);
        }
    }
    return fArr[n];

};

// Do not edit below this line
module.exports = fibonacci;
