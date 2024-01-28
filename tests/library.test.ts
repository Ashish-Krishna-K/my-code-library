import {
  capitalizeFirstLetterOfTheWord,
  randInt,
  randChoice,
  isAlpha,
  isSpace,
  isNumber,
  isSymbol
} from "../src/my-code-library";

describe('testing the capitalize function', () => {

  it('Should capitalize first letter of the given world!', () => {
    const testWord = capitalizeFirstLetterOfTheWord('ashish');
    expect(testWord).toBe('Ashish');
  });

  it('Should modify all caps words', () => {
    const testWord = capitalizeFirstLetterOfTheWord('ASHISH');
    expect(testWord).toBe('Ashish');
  })

})

describe('testing the random number function', () => {

  const random1 = randInt(5);
  const random0To100 = randInt(1000);
  const randomNothing = randInt();

  it('generates a random number', () => {
    expect(typeof random1).toBe('number');
  });

  it('generates a random number between 0 to 1000', () => {
    expect(random0To100 < 999 && random0To100 > 0).toBe(true);
  });

  it('generates a random number everytime', () => {
    expect(random1 !== random0To100 && random0To100 !== randomNothing && randomNothing !== random1).toBe(true);
  })
})

describe('testing the random choice function', () => {
  const input = ['a', 'b', 'c', 'd', 'e'];

  it('picks only items in the array', () => {
    expect(input).toContain(randChoice(input))
  });

})

describe('testing the isalpha function', () => {
  it('returns true for a lowercase alphabet', () => {
    expect(isAlpha('a')).toBe(true);
  });
  it('returns true for an uppercase alphabet', () => {
    expect(isAlpha('Z')).toBe(true);
  });
  it('returns true for all teh alphabets', () => {
    const ans = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').every(isAlpha);
    expect(ans).toBe(true);
  });
  it('returns false when a number is passed', () => {
    expect(isAlpha('1')).toBe(false);
  });
  it('returns false when a symbol is passed', () => {
    const ans = '!@#$%^&*()_+?><,.'.split('').map(isAlpha).filter(a => a);
    expect(ans.length).toBe(0);
  });
});

describe('testing the isspace function', () => {
  it('returns true for a single space', () => {
    expect(isSpace(' ')).toBe(true);
  });
  it('returns true for multiple spaces alphabet', () => {
    expect(isSpace('   ')).toBe(true);
  });
  it('returns true for a new line', () => {
    expect(isSpace('\n')).toBe(true);
  });
  it('returns false when anything other than a space is passed', () => {
    const ans = '!12abcKLJK'.split('').map(isSpace).filter(a => a);
    expect(ans.length).toBe(0);
  });
});

describe('testing the isnumber function', () => {
  it('returns true when a number is passed', () => {
    expect(isNumber('9')).toBe(true);
  });
  it('returns false when anything other than a number is passed', () => {
    const ans = '!?.,abcKLJK'.split('').map(isNumber).filter(a => a);
    expect(ans.length).toBe(0);
  });
});

describe('testing the issymbol function', () => {
  it('returns true for all the symbols', () => {
    const ans = `~!@#$%^&*()_-+={[}]|;:"',<.>/?`.split('').every(isSymbol);
    expect(ans).toBe(true);
  });
  it('returns false when anything other than a symbol is passed', () => {
    const ans = '123abcKLJK'.split('').map(isSymbol).filter(a => a);
    expect(ans.length).toBe(0);
  });
});