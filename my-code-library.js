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
}