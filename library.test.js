import { 
  capitalizeFirstLetterOfTheWord,
  generateRandomNumber

} from "./my-code-library";

it('Should capitalize first letter of the given world!', () => {
  const testWord = capitalizeFirstLetterOfTheWord('ashish');
  expect(testWord).toBe('Ashish');
});

it('Should modify all caps words', () => {
  const testWord = capitalizeFirstLetterOfTheWord('ASHISH');
  expect(testWord).toBe('Ashish');
})


const random1 = generateRandomNumber(5);
const random0To100 = generateRandomNumber(1000);
const randomNothing = generateRandomNumber();

it('generates a random number', () => {
  expect(typeof random1).toBe('number');
});

it('generates a random number between 0 to 1000', () => {
  expect(random0To100 < 999 && random0To100 > 0).toBe(true);
});

it('generates a random number everytime', () => {
  expect(random1 !== random0To100 && random0To100 !== randomNothing && randomNothing !== random1).toBe(true);
})