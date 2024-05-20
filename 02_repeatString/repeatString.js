

const repeatString = function () {

    let string = 'hey';
    for (let i = 1; i < 3; i++) {
     string += 'hey';
    }
    return string;
    
    string = '';
    for (let i = 1; i < 10; i++) {
        string += 'hello';
    }
    return string;

}


// Do not edit below this line
module.exports = repeatString;
