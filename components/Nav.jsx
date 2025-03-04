'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; //always import from 'next/navigation'.

export default function Nav() {
  const router = useRouter();
  const [currentLanguage, setCurrentLanguage] = useState('/'); //Set default language to Estonian.

  const changeLanguage = (lang) => { //Change language function only for navbar for logo and language buttons.
    setCurrentLanguage(lang);
    router.push(`/${lang}`);
  };

  const aboutPage = (lang) => { //Change language function only for navbar and only for about.
    setCurrentLanguage(lang);
    if (lang === '/') router.push(`/about`);
    else router.push(`/${lang}/about`);
  };

  return (
    <nav>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {currentLanguage === '/' ? ( //Navbar changes depending on the language set by currentLanguage variable.
                <>
                  <button onClick={() => changeLanguage('/')} className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image
                    className=""
                    src="/assets/images/logo.jpg"
                    alt="LVG Logo"
                    width={55}
                    height={55}
                    />
                            
                    <p className="self-center text-sm font-semibold whitespace-nowrap max-sm:hidden hover:underline">
                      Liikuma Kutsuv LVG
                    </p>
                  </button>
                </>
              ) : currentLanguage === 'en' ? (
              <>
                <button onClick={() => changeLanguage('en')} className="flex items-center space-x-3 rtl:space-x-reverse">
                  <Image
                  className=""
                  src="/assets/images/logo.jpg"
                  alt="LVG Logo"
                  width={55}
                  height={55}
                  />
                  
                  <p className="self-center text-sm font-semibold whitespace-nowrap max-sm:hidden hover:underline">
                    Liikuma Kutsuv LVG
                  </p>
                </button>
              </>
            ) : null
          }
          <div className="">
            <div className="flex p-4 md:p-0 mt-4 space-x-8 md:mt-0">
              {currentLanguage === '/' ? (
                  <>
                    <button onClick={() => aboutPage('/')} className="self-center text-sm font-semibold transition hover:text-cornflower-blue-400">
                      About
                    </button>
                  </>
                ) : currentLanguage === 'en' ? (
                  <>
                    <button onClick={() => aboutPage('en')} className="self-center text-sm font-semibold transition hover:text-cornflower-blue-400">
                      About
                    </button>
                  </>
                ) : null
              }
                    
            <div className='flex'>
              {currentLanguage === '/' ? (
                <>
                  <button className='tracking-wide font-semibold text-sm transition hover:text-cornflower-blue-400' onClick={() => changeLanguage('en')}>English&nbsp;
                    <span>
                      🇬🇧
                    </span>
                  </button>
                </>
              ) : currentLanguage === 'en' ? (
                <>
                  <button className='tracking-wide font-semibold text-sm transition hover:text-cornflower-blue-400' onClick={() => changeLanguage('/')}>Eesti&nbsp;
                    <span>
                      🇪🇪
                    </span>
                  </button>
                </>
                ) : null
              }
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};