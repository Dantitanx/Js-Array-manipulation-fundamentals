const ids = new Set([1, 2, 3]);
ids.add(2);
ids.delete(3);
console.log(ids.has(1)); //? Returns with true or false

const names = new Set(['Hi', 'from', 'set!']);
for (const entry of names.entries()) {
  console.log(entry);
}

const person1 = { name: 'Max' };
const person2 = { name: 'Manuel' };

const personData = new Map([[person1, [{ date: 'yesterday', price: 10 }]]]);

personData.set(person2, [{ date: 'two weeks ago', price: 100 }]);

console.log(personData);
console.log(personData.get(person1));

for (const [key, value] of personData.entries()) {
  console.log(key, value);
}

for (const key of personData.keys()) {
  console.log(key);
}

for (const value of personData.values()) {
  console.log(value);
}

//! Weakset, Weakmap

let singlePerson = {name: 'Max'};
const persons = new WeakSet(); //? The weakset allows data to be garbage collected. It doesn't hold the variable after it was emptied.


persons.add(singlePerson);

//singlePerson = null;
console.log(persons);

const personDataMap = new WeakMap();
personDataMap.set(singlePerson, 'Extra info!');

singlePerson = null;

console.log(personDataMap);

