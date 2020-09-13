import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';

const Item = ({name, children, active, onClick, ...props}) => (
  <MenuItem
    name={name}
    active={active}
    onClick={(e) => onClick(e, {name, ...props})}
    {...props}
  >
    {children}
  </MenuItem>
);

export default Item;
