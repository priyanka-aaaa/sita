import React from 'react';
// import Load from "../public/loader.gif";
import Image from "next/image"

export const Loader = () => {
    return (
      <div  className="website-loading">

      <div className="load-pict">

      {/* <Image src={Load} width="" height="" alt="" loading="lazy"/> */}

      <img src="/images/loader.gif" className="" alt="logo" />
     
        <div className="loader"></div>
      
      </div>
      
      </div>
    );
};


export default Loader;