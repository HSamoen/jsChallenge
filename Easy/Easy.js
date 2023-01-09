// EASY: compare the number of characters between two strings
let nameOne = 'Thomas';
let nameTwo = 'John';
let charRes = nameOne.localeCompare(nameTwo);
//.localeCompare compares the number of characters between values

console.log('The name Thomas is longer than John by ' + charRes + ' character.');
//console will show "The name Thomas is longer than John by 1 character."