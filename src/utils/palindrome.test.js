import should from 'should';
import {isPalindrome} from './palindrome';

const caseToTitleCase = [
  {
    name: 'palindrome_isPlaindrome_with_commas',
    input: 'Red rum, sir, is murder',
    expected: true,
  },
  {
    name: 'palindrome_isPlaindrome_with_symbols',
    input: 'Eva, can I see bees in a cave?',
    expected: true,
  },
  {
    name: 'palindrome_isPlaindrome_false',
    input: 'Hallo hello',
    expected: false,
  }
];

describe('Palindrom Utils isPalindrome', () => {
  caseToTitleCase.forEach(item => {
    it(`${item.name}`, () => {
      should(isPalindrome(item.input)).be.equal(item.expected);
    });
  });
});
