# my-code-library
Just a small Library of frequently used functions/methods.

## Available functions:

*[capitalizeFirstLetterOfTheWord](#capitalizefirstletteroftheword)
*[generateRandomNumber](#generaterandomnumber)
*[isAlpha](#isalpha)
*[isSpace](#isspace)
*[isNumber](#isnumber)
*[isSymbol](#issymbol)

___________________________________________________________________________________________________________

### capitalizeFirstLetterOfTheWord
 Takes in a word and converts only the first letter to upper case
 (if the whole word is uppercase then all letters other than the first
 letter will be converted to lowercase!);

 **Example:**
 ```
  const capitlaizedWord = capitalizeFirstLetterOfTheWord('hello');
  capitalizedWord // Hello

  const anotherWord = capitalizeFirstLetterOfTheWord('WORLD');
  anotherWord // World

 ```

### generateRandomNumber
 Generates a random number between 0 and a number provided in input.

**Example:**
 ```
  const randomNumber = generateRandomNumber(25);
  randomNumber // 13

 ```

### isAlpha
Accepts a single character as input, tests if the input character is an alphabet, ignoring case.

**Example:**
```
  const randomLetter = isAlpha('A');
  randomLetter // true

  const notALetter = isAlpha('5'):
  notALetter // false
```

### isSpace
Accepts a single character as input, tests if the input character is whitespace.

**Example:**
```
  const aSpace = isAlpha(' ');
  aSpace // true

  const notASpace = isAlpha('?'):
  notASpace // false
```

### isNumber
accepts a single character as input, tests if the input character is a number.
This is useful for the case when input is a string with numbers in between.

**Example:**
```
  const randomNumber = isAlpha('7');
  randomNumber // true

  const notANumber = isAlpha('a'):
  notANumber // false
```

### isSymbol
Accepts a single character as input, tests if the input character is a symbol.

**Example:**
```
  const symbol = isAlpha('$');
  symbol // true

  const notASymbol = isAlpha('b'):
  notASymbol // false
```