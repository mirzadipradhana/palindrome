import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  width: 200px;
  height: calc(100vh - (102.984px + 50px));
  margin: auto;
  margin-top: 20px;

  .item {
    margin: 5px;
  }
`;

const Home = (props) => {
  return (
    <Container>
      Hallo From Home
    </Container>
  );
}

Home.propTypes = {
  history: PropTypes.object.isRequired
};

export default Home;
