import React, {useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

import {isPalindrome} from '../../utils/palindrome';

const Wrapper = styled.div`
  min-height: 500px;
`;

const StyledFormControl = styled(FormControl)`
  min-width: 300px;
  width: 100%;
`;

const Palindrome = (props) => {
  const [input, setInput] = useState(null);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSumbit = useCallback(() => {
    try {
      const res = isPalindrome(input);
      setResult(res)
    } catch (e) {
      setResult(null);
      setError(e)
    }
  }, [input]);

  const handleReset = useCallback(() => {
    setResult(null);
    setError(null);
    setInput(null);
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  }

  return (
    <Wrapper>
      <Container>
        <h3>Palindrome Checker</h3>
        <StyledFormControl>
          <InputLabel htmlFor="my-input">Input Word or Sentence</InputLabel>
          <Input id="palindrome-input" onChange={handleChange} disabled={result !== null || (error && error.message !== null)} />
          <Button onClick={result === null && error === null ? handleSumbit : handleReset}>
            {result === null && error === null ? 'Check' : 'Reset'}
          </Button>
        </StyledFormControl>
      </Container>
        {
          result !== null && (
            <>
              <Divider />
              <Container>
                <h3>Result:</h3>
                {`${input} is ${result === false ? 'not' : ''} palindrome`}
              </Container>
            </>
          )
        }
        {
          error !== null && (
            <>
              <Divider />
              <Container>
                <h3>Error:</h3>
                {error.message}
              </Container>
            </>
          )
        }
    </Wrapper>
  );
}

Palindrome.propTypes = {
  history: PropTypes.object.isRequired
};

export default Palindrome;
