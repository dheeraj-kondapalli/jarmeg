import React from 'react';
import Navbar from './Navigation';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar/>
        {children}
    </div>
  );
};

export default Layout;
