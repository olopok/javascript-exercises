const reverseString = function(words) {
 let string = words.split("");
 string = string.reverse();
 string = string.join('');
 return string;
}

// Do not edit below this line
module.exports = reverseString;
