const findTheOldest = function(people) {
    people.forEach(item => {
        if (!item.yearOfDeath) {
        item.yearOfDeath = new Date().getFullYear();}
    });

    let age =
        people.map((person) =>
            person.yearOfDeath - person.yearOfBirth
        );
    let oldPerson;

    var max = age[0];
    var maxIndex = 0;

    for (i = 1; i <= age.length; i++) {
        if (age[i] > max) {
            maxIndex = i;
            max = age[i];
        }
        oldPerson = people[maxIndex];
    }
    return oldPerson;

};

// Do not edit below this line
module.exports = findTheOldest;
