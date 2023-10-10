let age = 40
let myName = 'Ahmed'
let myString = `My name is ${myName.toUpperCase()} and my age is ${age}`

console.log(myString);

// Another way to declare strings in JS

const myStr = new String('Ahmed Arshad')

console.log(myStr); // it returns an object with key value pairs, 0: 'A', 1: h and so on.. we also get .length property and prototype.

// We can access the individual values by selecting the index.

console.log(myStr[0]);

// myStr.charAt(1) will return h

// myStr.indexOf('h') will return the index number which is 1


