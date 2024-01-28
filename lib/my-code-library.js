"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSymbol = exports.isNumber = exports.isSpace = exports.isAlpha = exports.randChoice = exports.randInt = exports.capitalizeFirstLetterOfTheWord = void 0;
// takes in a word and converts only the first letter to upper case
//(if the whole word is uppercase then all letters other than the first
// letter will be converted to lowercase!)
const capitalizeFirstLetterOfTheWord = (word) => {
    return word
        .toLowerCase()
        .split("")
        .map((letters, index) => {
        if (index === 0)
            letters = letters.toUpperCase();
        return letters;
    })
        .join("");
};
exports.capitalizeFirstLetterOfTheWord = capitalizeFirstLetterOfTheWord;
//generates a random number between 0 and a number provided in input.
const randInt = (end) => Math.floor(Math.random() * end);
exports.randInt = randInt;
// Returns a random element from the given array.
const randChoice = (inputArray) => inputArray[(0, exports.randInt)(inputArray.length)];
exports.randChoice = randChoice;
// accepts a single character as input, tests if the input character is an alphabet case insensitively.
const isAlpha = (char) => {
    const charCode = char.charCodeAt(0);
    return (charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123);
};
exports.isAlpha = isAlpha;
// accepts a single character as input, tests if the input character is whitespace.
const isSpace = (char) => /\s/g.test(char);
exports.isSpace = isSpace;
// accepts a single character as input, tests if the input character is a number(this is needed for
// the case when input is a number but it's passed as a string).
const isNumber = (char) => char.charCodeAt(0) > 47 && char.charCodeAt(0) < 58;
exports.isNumber = isNumber;
// accepts a single character as input, tests if the input character is a symbol.
const isSymbol = (char) => {
    const charCode = char.charCodeAt(0);
    return ((charCode > 32 && charCode < 48) ||
        (charCode > 58 && charCode < 65) ||
        (charCode > 90 && charCode < 97) ||
        (charCode > 122 && charCode < 127));
};
exports.isSymbol = isSymbol;
