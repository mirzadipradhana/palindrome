import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const ButtonStyled = styled(Button)`
  color: #fff !important;
`;

const Item = ({name, children, active, onClick, ...props}) => (
  <ButtonStyled
    name={name}
    active={active}
    onClick={(e) => onClick(e, {name, ...props})}
    {...props}
  >
    {children}
  </ButtonStyled>
);

export default Item;
