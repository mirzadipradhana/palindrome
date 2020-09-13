import React, { useState, createContext } from "react";
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import styled from 'styled-components';

import Item from "./Item";
import PrivateItem from "./PrivateItem.js";

const NavbarContext = createContext();

const NavBarWrapper = styled.div`
  flex-grow: 1;
`;
const Title = styled(Typography)`
  flex-grow: 1;
`;

function Navbar({ children, isAuthenticated, ...props }) {

  // avoid rerender
  const [contextState] = useState({isAuthenticated})

  return (
    <NavbarContext.Provider value={contextState}>
      <NavBarWrapper>
        <AppBar {...props}>
          <Toolbar>
            <Title variant="h6">
              Frontend Assignment - Mirza Adipradhana
            </Title>
            {children}
          </Toolbar>
        </AppBar>
      </NavBarWrapper>
    </NavbarContext.Provider>
  );
}

Navbar.Context = NavbarContext;
Navbar.Item = Item;
Navbar.PrivateItem = PrivateItem;

export default Navbar;
