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

hobbies.splice(1, 0, 'Good Food'); //? 1: The index where it starts looking. 0: Delete this many elements.
                                    //? Good food: Insert this in place of that element where you start looking.



hobbies.splice(2) //? Deletes every item except for 2. index.

const removedElements = hobbies.splice(-1, 1); //? Starts from the last element (-1).