'use client';

import Link from 'next/link';
import React from 'react';

const Home = () => {
  return (
    <div className='app'>
      <div className='w-full flex-center flex-col text-center'>
        <h1 className="head_text">
          Movement is joy!
        </h1>
        <span className="head_text  blue_gradient">
          Let us move, LVG students!             
        </span>
        <p className="desc font-semibold">
          Be active and stay healthy
        </p>
      </div>
      <div className='items-center justify-center md:mx-40'>
        <div className="text-center pt-36 text-lg font-extrabold">
          <Link href="en/tracks">
            <p className="rounded-2xl hover:border border-main bg-cornflower-blue-400 py-3 md:px-48 max-sm:px-20 sm:px-48 text-background transition hover:bg-background hover:text-subtext-gray">
              Choose your track!
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home