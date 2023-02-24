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