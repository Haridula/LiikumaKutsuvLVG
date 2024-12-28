'use client';

import Link from 'next/link';
import React from 'react';

const Home = () => {
  return (
    <div>
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
        <div className="text-center pt-36 md:mt-24 text-lg font-extrabold text-black">
          <Link href="en/tracks">
            <p className="black_btn">
              Choose your track!
            </p>
          </Link>
        </div>
    </div>
  )
}

export default Home