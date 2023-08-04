import React from 'react';
import {Header} from "./Header"
import {Footer} from "./Footer"

const HomeLayout = ({ children }) => {
  return (
    <>
    <Header/>
     
      {children}
      <Footer/>
    </>
  );
};

export default HomeLayout;