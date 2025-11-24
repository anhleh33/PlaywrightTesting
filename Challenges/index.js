const { longestWord } = require("./longestWord");
const { evenDoubled } = require("./evenDoubled");
const { greet } = require("./greet");
const { calc } = require("./calc");

console.log(`Longest word: ${longestWord("Hi! I love JS.")}`);
console.log(`Even doubled: ${evenDoubled([1, 2, 3, 4])}`);
console.log(`Calc: ${calc(2, 1, '+')}`)
console.log(`Greet: ${greet("ANH HOANG")}`)