import React from 'react';
import Navbar from '../Components/Navigation';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar/>
        {children}
    </div>
  );
};

export default Layout;
