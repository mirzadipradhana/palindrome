import React, {useContext} from 'react';

import Navbar from './index';
import Item from './Item';

const PrivateItem = ({children, ...props}) => {
  const context = useContext(Navbar.Context);

  return context.isAuthenticated ? <Item {...props}>{children}</Item> : null;
};

export default PrivateItem;
