import React from 'react';
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      {/* <div className='container'> */}
        <div className='nav-container'>
          <nav className="navbar">
            <div className='nav'>
                <div className="apple-logo">
                  <img 
                    src="https://dtthemes.kinsta.cloud/a-for-apple/wp-content/uploads/sites/2/2024/01/logo.svg" 
                    alt="Logo"
                  />
                </div>
                <div className='linkbar'>
                  <Link to="/">Home
                  <img src="heart.svg" alt="" width='13px' height='13px' className='heart-icon'/></Link>
                  <Link to="/about">About Us</Link>
                  <div className="dropdown">
                    <Link to="/lms" className="dropdown-toggle">LMS
                    <img src="heart.svg" alt="" width='13px' height='13px' className='heart-icon'/></Link>
                    <div className="dropdown-menu">
                      <Link to="/courses">Courses</Link>
                      <Link to="/teachers">Teachers</Link>
                      <Link to="/categories">Categories Types</Link>
                      <Link to="/course-types">Courses-Types</Link>
                      <Link to="/registration">Registration</Link>
                    </div>
                  </div>
                  
                  <div className='dropdown'>
                    <Link to="/blog" className='dropdown-toggle'>Blog
                    <img src="heart.svg" alt="" width='13px' height='13px' className='heart-icon'/></Link>
                    <div className="dropdown-menu">
                      <Link to="/blog-listing">Blog Listing</Link>
                      <Link to="/blog-single">Blog Single</Link>
                    </div>
                  </div>
                  <Link to="/pages">Pages
                  <img src="heart.svg" alt="" width='13px' height='13px' className='heart-icon'/></Link>
                  <Link to="/contact">Contact Us</Link>
                </div>
                <div className='icons'>
                  <CiSearch className='icon'/>
                  <IoPersonOutline className='icon'/>
                  <MdOutlineShoppingBag className='icon'/>
                  <FaRegHeart className='icon'/>
                  <div className='menu-trigger'>
                  <IoMdMenu />
                  </div>
                </div>
            </div>
          </nav>
        </div>
      {/* </div> */}
    </>
  );
}

export default Navbar;
