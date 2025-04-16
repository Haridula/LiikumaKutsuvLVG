'use client';

import Link from 'next/link';
import React from 'react';

const Home = () => {
  return (
    <div className='app'>
      <div className='w-full flex-center flex-col text-center'>
        <h1 className="head_text">
          Liikumine on rõõm!
        </h1>
        <br className="max-md:hidden" />
        <span className="head_text  blue_gradient">
          LVG õpilased, kõik liikuma!              
        </span>
        <p className="desc font-semibold">
          Olge aktiivsed ja püsige terved
        </p>
      </div>
      <div className='items-center justify-center md:mx-40'>
        <div className="text-center pt-36 text-lg font-extrabold">
          <Link href="/rajad">
            <p className="rounded-2xl hover:border-4 border-cornflower-blue-400 bg-cornflower-blue-400 py-3 md:px-48 max-sm:px-20 sm:px-48 text-background transition hover:bg-background hover:text-subtext-gray">
              Vali oma rada!
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home