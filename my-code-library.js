// takes in a word and converts only the first letter to upper case
//(if the whole word is uppercase then all letters other than the first
// letter will be converted to lowercase!)
export const capitalizeFirstLetterOfTheWord = (word) => {
  return (
    word
      .toLowerCase()
      .split('')
      .map((letters, index) => {
        if (index === 0) letters = letters.toUpperCase();
        return letters;
      })
      .join('')
  )
};

//generates a random number between 0 and a number provided in input.
export const generateRandomNumber = (input) => Math.floor(Math.random() * input);

// accepts a single character as input, tests if the input character is an alphabet case insensitively.
export const isAlpha = (char) => /[a-z]/gi.test(char);

// accepts a single character as input, tests if the input character is whitespace.
export const isSpace = (char) => /\s/g.test(char);

// accepts a single character as input, tests if the input character is a number(this is needed for 
// the case when input is a number but it's passed as a string).
export const isNumber = (char) => /[0-9]/g.test(char);

// accepts a single character as input, tests if the input character is a symbol.
export const isSymbol = (char) => /[_`~!@#$%^&*()\-+={[\]}|\\;:'"<,>.?/]/g.test(char);