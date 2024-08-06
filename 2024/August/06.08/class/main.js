const myPersons = [
  {
    name: `baba`,
    age: 16,
  },
  {
    name: `dada`,
    age: 46,
  },
  {
    name: `mama`,
    age: 45,
  },
];

//TODO:
// 1. declare with `let`olderPerson with the first person
// 2.ITERATE OVER THE ARRAY
// 3. in the for loop check if the current person is older than the oldest person if he does reassign olderPerson to the current person
// return the oldest person

function getOldest(persons) {
  let olderPerson = persons[0];
  for (let i = 0; i < persons.length; i++) {
    if (persons[i].age > olderPerson.age) {
      olderPerson = persons[i];
    }
  }

  return olderPerson;
}
const myOlderPerson = getOldest(myPersons);
//console.log(`My Older Person`, myOlderPerson);

const nested = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

//TODO : sum the values of nested numbers array
// 1. declare with `let` `sum` variable. initialized with 0
// 2. itirate over the `nestedNumbers` array
// 3. itirate over the inner array
// 4. add the current number to sum
// 5. return sum

function sumNested(nestedNumbers) {
  let sum = 0;
  for (let i = 0; i < nestedNumbers.length; i++) {
    for (let j = 0; j < nestedNumbers[i].length; j++) {
      sum += nestedNumbers[i][j];
    }
  }
  return sum;
}

const mySum = sumNested(nested);
console.log(mySum);
