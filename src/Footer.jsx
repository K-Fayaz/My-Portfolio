import React from 'react';
import {FaGreaterThan,FaLessThan} from 'react-icons/fa';
import {BsSlashLg} from 'react-icons/bs';
import {CgFormatSlash} from 'react-icons/cg';



function Footer(){
  return (
    <>
      <div className='FooterContainer'>
          <h2><FaLessThan  className='Braces'/>Created with Passion By Fayaz<FaGreaterThan className='Braces'/></h2>
      </div>
    </>
  )
};


// <CgFormatSlash className='slash'/>


export default Footer;
