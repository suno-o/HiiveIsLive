import { alphabetize as alphabetize1 } from "./src/question1";
import { alphabetize as alphabetize2 } from "./src/question2";

const {
  npm_config_question: question,
  npm_config_input: input,
  npm_config_order: order,
} = process.env;

if (question === '1' && input) {
  console.log('=========================')
  console.log(`Input: ${input}`)
  console.log(`Output: ${alphabetize1(input)}`)
  console.log('=========================\n')
}

if (question === '2' && input) {
  console.log('=========================')
  console.log(`Input: ${input}`)
  console.log(`Order: ${order ? order : 'alphabetically'}`)
  console.log(`Output: ${order ? alphabetize2(input, order.split('')) : alphabetize2(input)}`)
  console.log('=========================\n')
}
