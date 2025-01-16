'use client';

import Link from 'next/link';
import React from 'react';

const Home = () => {
  return (
    <div>
      <div className='flex items-center flex-col sm:px-16 px-6'>
        <h1 className="w-full flex-center flex-col head_text text-center">
          Movement is joy!
        </h1>
        <br className="max-md:hidden" />
        <span className="w-full flex-center flex-col head_text text-center blue_gradient">
          Let us move, LVG students!             
        </span>
        <p className="w-full flex-center flex-col desc text-center">
          Find your own helpful tips to stay healthy all the time.
        </p>
      </div>
      <div className='mx-40'>
        <div className="text-center pt-36 md:mt-24 text-lg font-extrabold text-black mx-64 px-64">
          <Link href="en/tracks">
            <p className="rounded-2xl border border-black bg-black py-3 px-5 text-white transition-all hover:bg-white hover:text-black font-inter items-center justify-center">
              Choose your track!
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home