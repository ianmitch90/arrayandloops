// 1.
// Answer the following question without logging the value of `numberArray`.
var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for ( var i = 0; i < numberArray.length; i++ ) {
  numberArray[i] += 1;
}

var newNumber = numberArray[4];

// What is the value of `newNumber`?
// A: 6



// 2.
// Write a function `getLastItem(array)` which
// returns the last item in an array without removing the item

function getLastItem(odds) {
  return array[odds.length];
}




// 3.
// Adding to an array using indexes
// You can add and replace the items in an array using a combination of the = assignment operator and array indexes. Try it out!

var trees = ['pine', 'cypress', 'hemlock'];

// Using only array indexes, replace 'cypress' with 'maple'
// and add the strings 'walnut', 'cherry', and 'poplar' to the `trees` array

// your code here
trees[1] = 'maple';
trees.push('walnut', 'cherry', 'poplar');


console.assert( trees[1] === "maple", {"message": 'The [1] index in `trees` is not "maple"'} );
console.assert( trees[3] === "walnut", {"message": 'The [3] index in `trees` is not "walnut"'} );
console.assert( trees[4] === "cherry", {"message": 'The [4] index in `trees` is not "cherry"'} );
console.assert( trees[5] === "poplar", {"message": 'The [5] index in `trees` is not "poplar"'} );



// 4.
// Array of Arrays
// For questions 4 - 6, write in a comment the value of each variable
// without console logging the value
var twoDimensionalArray = [
  ['Arctic fox', 'Bengal fox'],
  ['Blanford\'s fox', 'Cape fox'],
  ['Corsac fox', 'Fennec fox'],
  ['Kit fox', 'Pale fox'],
  ['Rüppell\'s fox', 'Red fox'],
  ['Swift fox', 'Tibetan sand fox']
]

var foxPair = twoDimensionalArray[3];
// foxPair = ['Kit fox', 'Pale fox']

var foxOne = twoDimensionalArray[0][0];
// foxOne = 'Arctic fox'

var foxTwo = twoDimensionalArray[4][1];
// foxTwo = 'Red fox'

var foxThree = twoDimensionalArray[1][1];
// foxThree = 'Cape fox'



// 5.
// Write a function `rollCall()` with an array parameter
// which console logs:
// '<name>, present!' for every name in the array argument passed.
// Ex:
// rollCall(names);
// 'Huey, present!'
// 'Dewey, present!'
// 'Louie, present!'

var names = ['Huey', 'Dewey', 'Louie'];

// Your code here:
function rollCall(array) {
  for ( var i = 0; i < array.length; i++ ) {
    console.log(array[i] + ' present!');
  }
}



// 6.
// Write a function complements(array, number)
// which returns true if any two numbers in
// the array sum to the number.

function complements(array, number){
  // Loop over array
  for ( var i = 0; i < array.length; i++ ) {
    // for each number in array, store a firstNumber variable
    var firstNumber = array[i];
    // Loop over the array again
    for ( var j = 0; j < array.length; j++ ) {
      // Add every number in the array to the firstNumbers from the previous loop
      var sum = firstNumber + array[j];
      // If the sum equals the number argument log true
      if (sum === number) {
        return true;
      }
    }
  }
  // Because a for loop is synchronous the function will either return true
  // if the condition is truthy or will continue reading to the `return false`
  // if the condition is falsey
  return false;
}

var odds = [1, 3, 5, 7, 9, 11]
var ints = [-11, 40, 17, -5, -1, -11, 2, 9]

console.assert( complements(odds, 4) === true );
console.assert( complements(odds, 1) === false );
console.assert( complements(ints, -22) === true );
console.assert( complements(ints, 16) === true );
console.assert( complements(ints, 40) === false );
