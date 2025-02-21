'use client';

import Link from 'next/link';
import React from 'react';

const Home = () => {
  return (
    <div className='app'>
      <div>
        <h1 className="w-full flex-center flex-col head_text text-center">
          Liikumine on rõõm!
        </h1>
        <br className="max-md:hidden" />
        <span className="w-full flex-center flex-col head_text text-center blue_gradient">
          LVG õpilased, kõik liikuma!              
        </span>
        <p className="w-full flex-center flex-col desc text-center">
          Olge aktiivsed ja püsige terved!
        </p>
      </div>
      <div className='items-center justify-center md:mx-40'>
        <div className="text-center pt-36 text-lg font-extrabold text-black ">
          <Link href="/rajad">
            <p className="rounded-2xl border border-black bg-black py-3 md:px-48 max-sm:px-20 sm:px-48 text-white transition-all hover:bg-white hover:text-black font-inter">
              Vali oma rada!
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home