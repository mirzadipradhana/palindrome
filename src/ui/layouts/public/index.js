import React from 'react'
import styled from 'styled-components';

import logo from '../../../assets/images/logo.svg';

import Navigation from './Navigation';
import { NAVIGATION_ITEMS } from './options';

import '../../../assets/styles/App.css';

const BodySection = styled.section`
  width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: black;

  > div {
    display: grid;
    align-items: center;
    justify-items: center;

    h1 {
      margin: 0;
    }
  }
`;

const PublicLayout = ({ children, isAuthenticated }) => {
  return (
    <>
      <section>
        <Navigation
          logo={logo}
          items={NAVIGATION_ITEMS}
          isAuthenticated
        />
      </section>
      <BodySection>
        <div>
          {children}
        </div>
      </BodySection>
    </>
  );
};

export default PublicLayout;
