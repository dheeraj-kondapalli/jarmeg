import React from 'react';
import Navbar from '../Components/Navbar/Navigation';
import './layout.css'

const Layout = ({ children }) => {

  return (
    <div >
      <Navbar/>
        {children}
    </div>
  );
};

export default Layout;