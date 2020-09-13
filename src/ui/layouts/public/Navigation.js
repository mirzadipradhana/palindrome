import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import Navbar from '../../components/Navbar';

const NavigationWrapper = styled.div`
  margin-bottom: 14px;

  .ui.menu {
    margin-bottom: 0;

    &.secondary {
      margin-top: 0;
    }
  }
`;

const Navigation = (props) => {
  const history = useHistory();

  const handleItemClick = (_, { name, path }) => {
    history.push(path)
  };

  return (
    <NavigationWrapper>
      <Navbar isAuthenticated={props.isAuthenticated}>
        {props.items.map(item => (
          item.isPrivate ? (
            <Navbar.PrivateItem
              key={`nav-item-${item.name}`}
              name={item.name}
              path={item.path}
              onClick={handleItemClick}
            >
              {item.title}
            </Navbar.PrivateItem>
          ) : (
              <Navbar.Item
                key={`nav-item-${item.name}`}
                name={item.name}
                path={item.path}
                onClick={handleItemClick}
              >
                {item.title}
              </Navbar.Item>
            )
        ))}
      </Navbar>
    </NavigationWrapper>
  );
};

Navigation.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  })),
  isAuthenticated: PropTypes.bool,
}

Navigation.defaultProps = {
  items: [],
  isAuthenticated: false,
}
export default Navigation;
