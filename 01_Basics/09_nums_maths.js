// Another way to define variables with numbers.
const balance = new Number(99)


const hundreds = 1000000

console.log(hundreds.toLocaleString());

// Math.round() Math.ceil() Math.floor()

// Math.min() returns the minimum value in an array.

// Math.max() returns the maximum value in an array.

// Math.radom() returns a random number each time between 0 and 1

console.log((Math.random() * 10) + 1);

const min = 10
const max = 20
// It will return random values between 10 to 20

console.log(Math.floor(Math.random() * (max - min + 1 )) + min);