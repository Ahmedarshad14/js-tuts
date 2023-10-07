// let score = '33abc'

// let score = undefined

let score = null
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)

console.log(typeof valueInNumber);
console.log(valueInNumber);

/**
 * JS will convert any datatype to number. when we console it, it will show the type as number,
 * 
 * But when we try to access the value of converted variable, it will show NaN in case of string and undefined conversion and 0 in case of null.
 * 
 * In case of booleans, it will show 1 if true and 0 if false.
 * 
 * "33" => 33
 * "33abc" => NaN
 * true => 1
 * false => 0
 * null => 0
 * undefined => NaN
 *  
 */