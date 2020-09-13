import React from 'react'
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';

import logo from '../../../assets/images/logo.svg';

import Navigation from './Navigation';
import { NAVIGATION_ITEMS } from './options';

import '../../../assets/styles/App.css';

const BodySection = styled.div`
  display: flex;
  margin: 12px 12px;
  margin-top: 100px;
  box-sizing: border-box;
  width: calc(100vw - 24px) !important;
`;

const StyledPaper = styled(Paper)`
  width: 100%;
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
        <StyledPaper>
          {children}
        </StyledPaper>
      </BodySection>
    </>
  );
};

export default PublicLayout;
