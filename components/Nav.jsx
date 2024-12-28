'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Nav() {
  const router = useRouter();
  const [currentLanguage, setCurrentLanguage] = useState('/');

  const changeLanguage = (lang) => {
    setCurrentLanguage(lang);
    router.push(`/${lang}`);
  };

  return (
    <nav>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {currentLanguage === '/' ? (
                <>
                  <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image
                    className=""
                    src="/assets/images/logo.jpg"
                    alt="LVG Logo"
                    width={55}
                    height={55}
                    />
                            
                    <p className="self-center text-sm font-semibold whitespace-nowrap max-sm:hidden">
                      LVG terviserajad
                    </p>
                  </a>
                </>
              ) : (
              <>
                <a href="/en" className="flex items-center space-x-3 rtl:space-x-reverse">
                  <Image
                  className=""
                  src="/assets/images/logo.jpg"
                  alt="LVG Logo"
                  width={55}
                  height={55}
                  />
                  
                  <p className="self-center text-sm font-semibold whitespace-nowrap max-sm:hidden">
                    LVG terviserajad
                  </p>
                </a>
              </>
            )
          }
          <div className="hidden w-full md:block md:w-auto">
            <div className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
              {currentLanguage === '/' ? (
                  <>
                    <a href="en/about" className="self-center text-sm font-semibold whitespace-nowrap hover:text-blue-600">
                      About
                    </a>
                  </>
                ) : (
                  <>
                    <a href="/about" className="self-center text-sm font-semibold whitespace-nowrap hover:text-blue-600">
                      About
                    </a>
                  </>
                )
              }
                    
            <div>
              {currentLanguage === '/' ? (
                <>
                  <button className='tracking-wide font-semibold text-sm hover:text-blue-600' onClick={() => changeLanguage('en')}>English&nbsp;
                    <span className="Emoji_emoji__6sYSR __variable_c30de8 Emoji_emoji-large__iiCJx !bg-transparent transform active:scale-75 transition-transform" data-src="">
                      🇬🇧
                    </span>
                  </button>
                </>
              ) : (
                <>
                  <button className='tracking-wide font-semibold text-sm hover:text-blue-600' onClick={() => changeLanguage('/')}>Eesti&nbsp;
                    <span className="Emoji_emoji__6sYSR __variable_c30de8 Emoji_emoji-large__iiCJx !bg-transparent transform active:scale-75 transition-transform" data-src="">
                      🇪🇪
                    </span>
                  </button>
                </>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

