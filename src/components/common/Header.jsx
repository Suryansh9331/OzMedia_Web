import React, { useState } from 'react';
import Button from '../ui/Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-bg-dark py-4 px-4 md:px-16 flex justify-between items-center">
      <div className="flex items-center">
        <img src="/images/img_dytonite_2.png" alt="Dytonite Logo" className="h-[110px] w-auto" />
      </div>
      
      <div className="hidden md:flex items-center space-x-6">
        <a href="/" className="text-white font-montserrat font-bold text-base">Home</a>
        <div className="flex items-center">
          <a href="/services" className="text-primary-red font-montserrat font-bold text-base">Service</a>
          <img src="/images/img_plus_11x11.svg" alt="Plus" className="ml-2 w-[11px] h-[11px]" />
        </div>
        <div className="flex items-center">
          <a href="/work" className="text-primary-red font-montserrat font-bold text-base">Work</a>
          <img src="/images/img_plus_11x11.svg" alt="Plus" className="ml-2 w-[11px] h-[11px]" />
        </div>
        <div className="flex items-center">
          <a href="/company" className="text-primary-red font-montserrat font-bold text-base">Company</a>
          <img src="/images/img_plus_11x11.svg" alt="Plus" className="ml-2 w-[11px] h-[11px]" />
        </div>
        <div className="flex items-center">
          <a href="/blog" className="text-primary-red font-montserrat font-bold text-base">Blog</a>
          <img src="/images/img_plus_11x11.svg" alt="Plus" className="ml-2 w-[11px] h-[11px]" />
        </div>
        <div className="flex items-center">
          <a href="/contact" className="text-primary-red font-montserrat font-bold text-base">Contact</a>
          <img src="/images/img_plus_11x11.svg" alt="Plus" className="ml-2 w-[11px] h-[11px]" />
        </div>
      </div>
      
      <div className="hidden md:block">
        <Button 
          variant="primary" className="bg-primary-red text-white font-montserrat font-bold text-lg px-6 py-3"
        >
          Book Now
          <img src="/images/img_plus.svg" alt="Plus" className="ml-2 inline-block w-2 h-2" />
        </Button>
      </div>
      
      <button className="md:hidden text-white" onClick={toggleMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      
      {isMenuOpen && (
        <div className="absolute top-20 left-0 right-0 bg-bg-dark z-50 p-4 md:hidden">
          <div className="flex flex-col space-y-4">
            <a href="/" className="text-white font-montserrat font-bold text-base">Home</a>
            <a href="/services" className="text-primary-red font-montserrat font-bold text-base">Service</a>
            <a href="/work" className="text-primary-red font-montserrat font-bold text-base">Work</a>
            <a href="/company" className="text-primary-red font-montserrat font-bold text-base">Company</a>
            <a href="/blog" className="text-primary-red font-montserrat font-bold text-base">Blog</a>
            <a href="/contact" className="text-primary-red font-montserrat font-bold text-base">Contact</a>
            <Button 
              variant="primary" className="bg-primary-red text-white font-montserrat font-bold text-lg px-6 py-3 w-full"
            >
              Book Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;