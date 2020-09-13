import React, { useState, createContext } from "react";
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Menu from '@material-ui/core/Menu';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import styled from 'styled-components';

import Item from "./Item";
import PrivateItem from "./PrivateItem.js";

const NavbarContext = createContext();

const NavBarWrapper = styled.div`
  flex-grow: 1;
`;

const Title = styled(Typography)`
  flex-grow: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const BurgerButton = styled(IconButton)`
  @media (min-width: 719.95px) {
    display: none;
  }
  margin-right: ${({theme}) => theme.spacing(2)};
`;

const MenuWrapper = styled.div`
  @media (max-width:720px) {
    display: none;
  }
  @media (min-width:719.95px) {
    display: flex;
  }
`;

function Navbar({ children, isAuthenticated, ...props }) {
  const [anchorEl, setAnchorEl] = useState(null);

  // avoid rerender
  const [contextState] = useState({isAuthenticated})

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <NavbarContext.Provider value={contextState}>
      <NavBarWrapper>
        <AppBar {...props}>
          <Toolbar>
            <Title variant="h6">
              Frontend Assignment - Mirza Adipradhana
            </Title>
            <MenuWrapper>
              {children}
            </MenuWrapper>
            <BurgerButton edge="start" color="inherit" aria-label="menu" onClick={handleClick}>
              <MenuIcon />
            </BurgerButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              keepMounted
            >
              {children}
            </Menu>
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
