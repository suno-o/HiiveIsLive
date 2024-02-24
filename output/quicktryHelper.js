"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const question1_1 = require("./src/question1");
const question2_1 = require("./src/question2");
const { npm_config_question: question, npm_config_input: input, npm_config_order: order, } = process.env;
if (question === '1' && input) {
    console.log('=========================');
    console.log(`Input: ${input}`);
    console.log(`Output: ${(0, question1_1.alphabetize)(input)}`);
    console.log('=========================\n');
}
if (question === '2' && input) {
    console.log('=========================');
    console.log(`Input: ${input}`);
    console.log(`Order: ${order ? order : 'alphabetically'}`);
    console.log(`Output: ${order ? (0, question2_1.alphabetize)(input, order.split('')) : (0, question2_1.alphabetize)(input)}`);
    console.log('=========================\n');
}
