const numbers = [1, 2, 3];
console.log(numbers);

/* const moreNumbers = new Array(5); //? Array with the lenght of 5.
console.log(moreNumbers); */

const moreNumbers = Array.from('Hi!'); //? Makes an array from Array-like object(pl: string).
console.log(moreNumbers);

const hobbies = ['Sports', 'Cooking'];
hobbies.push('Reading'); //? Always adds the new element to the end of the array. Returns the new lenght of the array.
hobbies.unshift('Coding'); //? Always adds the new element to the beginning of the array. Returns the new lenght of the array.
hobbies.pop(); //? Removes the last element of the array, it also returns it.
hobbies.shift(); //? Removes the item from the beginning of the array.
console.log(hobbies);

//! Splice:

hobbies.splice(1, 0, 'Good Food'); //? 1: The index where it starts looking. 0: Delete this many elements.
                                    //? Good food: Insert this in place of that element where you start looking.

hobbies.splice(2) //? Deletes every item except for 2. index.

const removedElements = hobbies.splice(-1, 1); //? Starts from the last element (-1).

//! Slice, Concat:

const testResults = [1, 5.3, 1.5, 10, 23, 5];
//const storedResult = testResults.slice(); //? Without args it creates a copy of the array that points to a new reference.
const storedResult = testResults.slice(0,2); //? Returns (1, 5.3) in a new array.
//const storedResult = testResults.concat([3.99, 88]); //? Concats two arrays without nesting.

testResults.push(7.77);
console.log(testResults,storedResult);
console.log(testResults.indexOf(1.5)) //? Finds the index of the specified element. Only returns first find.
console.log(testResults.lastIndexOf(1.5)); //? Does the same, but starts from the back of the array.
console.log(testResults.includes(10)) //? Returns true or false.

//! Find, FindIndex

const personData = [{name: 'Max'}, {name: 'Manuel'}];
const manuel = personData.find((person, index, persons) => {
    return person.name === 'Manuel';
});                                                             //? 1st arg is a single obj from the array. 
                                                                //? 2nd arg is the index of that single obj.
                                                                //? 3rd arg is the full array.
console.log(manuel);

const maxIndex = personData.findIndex((person, index, persons) => {
    return person.name === 'Max';
});

//! foreach

const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;
const taxAdjustedPrices = [];

prices.forEach((price,index) => {
    const priceObj = {index: index, taxAdjPrice: price * 1(+tax)}
    taxAdjustedPrices.push(priceObj);

});

//! Map

prices.map((price,index) => {
    const priceObj = {index: index, taxAdjPrice: price * 1(+tax)}
    return priceObj;

}); //? Returns a brand new array where every element has been changed.

const numberArray = [1,2,3];

function transformToObjects (numberArray) {
    return numberArray.map(number => {
        return {val: number}
    });
} //? Returns indexed array.

//! Sort

const sortedPrices = prices.sort((a,b) => {
 if(a > b){
    return 1;
 }else if (a === b){
    return 0;
 }else{
    return -1;
 }
});
console.log(sortedPrices);
//console.log(sortedPrices.reverse());

//! Filter

const filteredArray = prices.filter((price,index,prices) => {
    return price > 6; //? Returns elements that are greater than 6 in a new array.
});
// const filteredArray = prices.filter(price => price > 6);
console.log(filteredArray);

//! Reduce

const sum = prices.reduce((prevValue, curValue, curIndex, prices) => {
    return prevValue + curValue;
}, 0); //? prevVale = 0 at the start, curValue is the next value the initial value that its working with.
        //? Combines values in an array to a single value.

//! Split and Join

const data = 'New York;10.99;2000';
const transformedData = data.split(';');

const nameFragments = ['Max', 'Schwarz'];
const name = nameFragments.join(' ');

//! Spread operator

const copiedNameFragments = [...nameFragments]; //? Copies individual value of array to a new array. 
nameFragments.push('Mr');
//console.log(nameFragments,copiedNameFragments);
console.log(Math.min(...prices));

const nameData = ['Max', 'Schwarz', 'Mr', 30];

const [firstName, lastName, ...otherInfo] = nameData;
console.log(firstName, lastName, otherInfo);
//? The spread operator collects all the other params and puts it into an array.

