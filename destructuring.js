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

// Destructuring subsets with array

let languages = ["french", "english", "chinese", "spanish", "japanese"];
let [maryNative, marySecondar] = languages; //The 2 first languages of the array are assigned
console.log (maryNative, marySecondar);

let [,,marcNative, marcSecondar] = languages; //The third and forth languages are assigned due to the coma
console.log (marcNative, marcSecondar);

// Destructuring subsets with object

let languages2 = {
    l1: "french",
    l2: "italien",
    l3: "english",
    l4: "russian"
} 

let {l1, l4} = languages2; //Destruturing only l1 and l2
console.log (l1, l4);

// Using rest parameter syntax with array

let fruits = ["apple", "orange", "cherry", "peach", "banana"];
let [favorite, secondFavorite, ...others] = fruits;
console.log(favorite);
console.log(secondFavorite);
console.log(others); //For the rest of the array, will be an array not separated elements

// Using rest parameter syntax with object

let favoriteFood = {
    brian: "pizza",
    elodie: "chicken",
    marc: "hambuer",
    julie: "pasta"
};

let {brian, julie, ...otherFood} = favoriteFood;
console.log(brian);
console.log(julie);
console.log(otherFood); //For the rest of the object element

