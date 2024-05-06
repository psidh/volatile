'use client';
import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const navClass = `py-1 px-4 rounded-full hover:bg-white-400 transform 
  transition-all duration-500 font-semibold my-2 hover:text-white 
  hover:-translate-y-1 hover:underline  underline-offset-4`;

  return (
    <div>
      <div className='mx-8 lg:mx-20 flex justify-between items-center py-8 md:py-10'>
        <a href='/'>
          <img
            src='/logo.png'
            alt='Logo'
            className='w-16 h-16 rounded-full hover:opacity-75'
          />
        </a>

        <div className='justify-center gap-4 hidden lg:flex items-center'>
          <a href='/about' className={navClass}>
            About
          </a>
          <a href='/myths' className={navClass}>
            Home
          </a>
          <a href='/sampradayas' className={navClass}>
            Contact
          </a>
          <a href='/epics' className={navClass}>
            Discord
          </a>
          <a href='/schools-of-thought' className={navClass}>
            Login/SignUp
          </a>
        </div>

        <AiOutlineMenu
          onClick={toggleNav}
          className='flex lg:hidden w-6 h-6 cursor-pointer'
        />
      </div>

      {isNavOpen && ( // Render the navigation links if isNavOpen is true
        <div className='flex flex-col lg:hidden justify-start items-start mx-4'>
          <a href='/about' className={navClass}>
            About
          </a>
          <a href='/' className={navClass}>
            Home
          </a>
          <a href='/contact' className={navClass}>
            Contact
          </a>
          <a href='/discord' className={navClass}>
            Discord
          </a>
          <a href='/login' className={navClass}>
            Login/SignUp
          </a>
        </div>
      )}
    </div>
  );
};

export default NavBar;
