'use client'

import React, { useState, useEffect } from 'react'

const Backtotop = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const scrolltotop = () => { //Scroll to the top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 0); // Show button if scrolled below 0
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    isVisible ? (// Show if true
      <>
        {/* Desktop */}
        <button
          onClick={scrolltotop}
          className="fixed bottom-4 right-3 bg-cornflower-blue-400 p-2.5 text-background hover:text-main rounded-lg hover:bg-background hover:border border-cornflower-blue-400 xs:hidden max-sm:hidden max-md:hidden">
          <span className='mx-1.5'>↑</span>
        </button>

        {/* Mobile */}
        <button
        onClick={scrolltotop}
        className="fixed bottom-4 right-3 bg-cornflower-blue-400 p-2 text-background hover:text-main rounded-lg hover:bg-background hover:border border-cornflower-blue-400 md:hidden">  
        <span className='mx-2'>↑</span>
        </button> 
      </>
      ) : null
  );
}

export default Backtotop;