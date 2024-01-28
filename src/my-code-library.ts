// takes in a word and converts only the first letter to upper case
//(if the whole word is uppercase then all letters other than the first
// letter will be converted to lowercase!)
export const capitalizeFirstLetterOfTheWord = (word: string): string => {
  return word
    .toLowerCase()
    .split("")
    .map((letters, index) => {
      if (index === 0) letters = letters.toUpperCase();
      return letters;
    })
    .join("");
};

//generates a random number between 0 and a number provided in input.
export const randInt = (end: number = 10): number => Math.floor(Math.random() * end);

// Returns a random element from the given array.
export const randChoice = <T>(inputArray: T[]): T =>
  inputArray[randInt(inputArray.length)];

// accepts a single character as input, tests if the input character is an alphabet case insensitively.
export const isAlpha = (char: string): boolean => {
  const charCode = char.charCodeAt(0);
  return (charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123);
};

// accepts a single character as input, tests if the input character is whitespace.
export const isSpace = (char: string): boolean => /\s/g.test(char);

// accepts a single character as input, tests if the input character is a number(this is needed for
// the case when input is a number but it's passed as a string).
export const isNumber = (char: string): boolean =>
  char.charCodeAt(0) > 47 && char.charCodeAt(0) < 58;

// accepts a single character as input, tests if the input character is a symbol.
export const isSymbol = (char: string): boolean => {
  const charCode = char.charCodeAt(0);
  return (
    (charCode > 32 && charCode < 48) ||
    (charCode > 57 && charCode < 65) ||
    (charCode > 90 && charCode < 97) ||
    (charCode > 122 && charCode < 127)
  );
};
