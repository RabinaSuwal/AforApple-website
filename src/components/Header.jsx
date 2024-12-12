import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

function Header() {
  return (
    <>
      {/* <div className='container'> */}
        <header className="header">
          <div className='header-left'>
                  <span className='location-icon'><CiLocationOn/></span>
                  <span><p>Manzana Maria Elena Leiva s/n., Vitoria, Can 58948</p></span>
          </div>
        
          <div className='header-right'>
                  <div><FaPhoneAlt className='mail-icon'/><p>+00 12 345 6789</p></div>
                  <div>|</div>
                  <div><IoMdMail className='mail-icon'/><p>support@example.com</p></div>
          </div>
        </header>
      {/* </div> */}
    </>
  )
}

export default Header