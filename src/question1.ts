/**
 * Question 1. Alphabetically order a string.
 * For example, given the input “HiiveIsLive", the output “eehiiiilsvv" is produced
 * 
 * Assumption: Provided example contains capital letters in input, whereas all letters in output are in lowercase.
 * I'm assuming that input needs to be converted to lowercase before ordering alphabetically.
 */
export function alphabetize(input: string) {
  const inputArr = input.toLowerCase().split('');

  return inputArr.sort().join('');
}
