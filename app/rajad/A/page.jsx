'use client';

import React from 'react';
import Image from 'next/image';

const A = () => {
  return (
    <div className='mx-64 px-36'>
      <div>
        <h1 className='mt-2.5 mb-2.5 text-xl font-bold blue_gradient'>
          A-hoone:
        </h1>
      </div>
      <hr className='mt-5 mb-5'/>
      <div>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
          <h2 className='mt-2.5 mb-2.5 font-bold text-base text-black'>
            Placeholder h2
          </h2>
          <Image
            className=""
            src="/assets/images/logo.jpg"
            alt="LVG Logo"
            width={55}
            height={55}
          />
        </div>
          <p className='mt-5 mb-28 text-lg text-black'>
            Placeholder text
          </p>
        </div>

        <hr className='mt-5 mb-5'/>
      <div>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
          <h2 className='mt-2.5 mb-2.5 font-bold text-base text-black'>
            Placeholder h2
          </h2>
          <Image
            className=""
            src="/assets/images/logo.jpg"
            alt="LVG Logo"
            width={55}
            height={55}
          />
        </div>
          <p className='mb-28 text-lg text-black'>
            Placeholder text
          </p>
        </div>
    </div>
  );
};

export default A