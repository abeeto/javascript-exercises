const findTheOldest = function(people) {
    const getAge = (person) => {
        const livedUntil = person.yearOfDeath ||  new Date().getFullYear();
        return livedUntil - person.yearOfBirth;
    };
    const byAge = (personA, personB) => getAge(personA) - getAge(personB);
    const peopleByAge = people.sort(byAge);
    return peopleByAge.pop();
};

// Do not edit below this line
module.exports = findTheOldest;
