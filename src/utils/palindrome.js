const sanitizeString = (input) => {
  let str = ''

  for (let i = 0; i < input.length; i++) {
    const code = input.charCodeAt(i);

    if ((code > 47 && code < 58) ||  // numeric (0-9)
        (code > 64 && code < 91) ||  // upper alpha (A-Z)
        (code > 96 && code < 123)) { // lower alpha (a-z)
      str += input[i];
    }
  }

  return str;
}

export const isPalindrome = (input = '') => {
  if (typeof input !== 'string') {
    throw 'The input should be string';
  }

  const sanitizedInput = sanitizeString(input).toLowerCase();

  for (let i = 0; i < sanitizedInput.length / 2; i++) {
    if (sanitizedInput[i] !== sanitizedInput[sanitizedInput.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
