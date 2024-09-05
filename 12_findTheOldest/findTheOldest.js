const findTheOldest = function(people) {
    const getAge = (person) => {
        const livedUntil = person.yearOfDeath ||  new Date().getFullYear();
        return livedUntil - person.yearOfBirth;
    };
    const byAge = (personA, personB) => getAge(personA) - getAge(personB);
    const agesOfPeople = people.sort(byAge);
    return agesOfPeople.pop();
};

// Do not edit below this line
module.exports = findTheOldest;
