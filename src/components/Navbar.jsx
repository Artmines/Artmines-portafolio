import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { styles } from '../styles';
import { navLinks } from '../constants'
import {  menu, close, modernLogo } from '../assets'

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
      <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-300 ${
        scrolled
          ? 'bg-primary/80 backdrop-blur-lg border-b border-white/10'
          : 'bg-transparent'
      }`}>
        <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
          <Link to='/' className='flex items-center gap-2' onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }} > <img src={modernLogo} alt="logo" className='w-9 h-9 object-contain rounded-full'  />
              <p className='text-white text-[18px] font-bold cursor-pointer flex'>
              Artmines &nbsp;<span className='sm:block hidden'>| Full Stack & FiveM Developer</span></p>
           </Link>
           <ul className='list-non hidden sm:flex flex-row gap-10'>
              {navLinks.map(link => (
                <li key={link.id}
                   className={`${
                active === link.title ? "text-white" : "text-[#a1a1aa]"
              } hover:text-white text-[18px] font-medium cursor-pointer transition-colors relative group`}
              onClick={() => setActive(link.title)}>
                  <a href={`#${link.id}`}>{link.title}</a>
                  <span className='absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#f97316] to-[#e11d48] transition-all duration-300 group-hover:w-full' />
                </li>
              ))}
           </ul>
           <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 absolute
          top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl bg-black/70 backdrop-blur-lg border border-white/10`}>
                       <ul className='list-non flex justify-end items-start flex-col gap-4'>
              {navLinks.map(link => (
                <li key={link.id}
                   className={`${
                active === link.title ? "text-white" : "text-[#a1a1aa]"
              } font-medium cursor-pointer text-[16px] hover:text-white transition-colors`}
              onClick={() => {
                setToggle(!toggle)
                setActive(link.title)
                }}>
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
           </ul>
          </div>
           </div>
        </div>
      </nav>
  )
}

export default Navbar
