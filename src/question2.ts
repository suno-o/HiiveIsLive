/**
 * Question 2. Extend question 1 to take a second input which is a custom alphabet.
 * The input should be an ordered list of all 26 characters in any order.
 * The function should use this alphabet for ordering the input string.
 * 
 * Assumption: custom alphabet (2nd parameter) is an array of 26 unique lowercase alphabet letter
 */
const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

export function alphabetize(input: string, alphabet: string[] = ALPHABET.split(''))  {
  const inputLowerCase = input.toLowerCase();
  const occurrence: Record<string, number> = {};

  for (const letter of alphabet) {
    occurrence[letter] = 0;
  }

  for (const char of inputLowerCase) {
    occurrence[char]++;
  }
  
  let output = '';
  for (const letter in occurrence) {
    output += letter.repeat(occurrence[letter]);
  }

  return output;
}
