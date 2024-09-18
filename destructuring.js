/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Without destructuring arrays

let ages = [20,30,35];
let john = ages[0];
let mary = ages[1];
let louise = ages[2];
console.log (john, mary, louise);

// Destructuring arrays

let olderAges = [40,50,65];
let [ruben, marcus, stella] = olderAges;
console.log (ruben, marcus, stella);

// Destructuring objects

let jobs = {
    marc: "designer",
    mike: "director",
    alicia: "accountant"
};

let {marc, mike, alicia} = jobs;
console.log (marc, mike, alicia);

// Destructuring subsets

let languages = ["french", "english", "chinese", "spanish", "japanese"];
let [maryNative, marySecondar] = languages; //The 2 first languages of the array are assigned
console.log (maryNative, marySecondar);

let [,,marcNative, marcSecondar] = languages; //The third and forth languages are assigned due to the coma
console.log (marcNative, marcSecondar);

// Using rest parameter syntax
