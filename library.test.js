import { capitalizeFirstLetterOfTheWord } from "./my-code-library";

it('Should capitalize first letter of the given world!', () => {
  const testWord = capitalizeFirstLetterOfTheWord('ashish');
  expect(testWord).toBe('Ashish');
});

it('Should modify all caps words', () => {
  const testWord = capitalizeFirstLetterOfTheWord('ASHISH');
  expect(testWord).toBe('Ashish');
})