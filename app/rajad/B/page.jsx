'use client';

import React from 'react';
import Image from 'next/image';

const B = () => {
  return (
    <div className='mx-4 px-8'>
      <div className='md:mx-64'>

        {/* Desktop */}

        <div className='max-sm:hidden max-md:hidden'>
          <div>
            <h1 className='mt-2.5 mb-2.5 text-xl font-bold blue_gradient'>
              B-hoone:
            </h1>
          </div>
          <hr className='mt-5 mb-5 border-divider'/>
          <div>
            <div className='grid grid-cols-2 gap-6'>
              <h2 className='mt-2.5 mb-2.5 font-bold text-base'>
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
            <div>
              <p className='mt-5 mb-28 text-lg'>
                Placeholder paragraph
              </p>
            </div>
          </div>

            <hr className='mt-5 mb-5 border-divider'/>

          <div>
            <div className='grid grid-cols-2 gap-6'>
              <h2 className='mt-2.5 mb-2.5 font-bold text-base'>
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
            <div>
              <p className='mb-28 text-lg'>
                Placeholder paragraph
              </p>
            </div>
          </div>
        </div>

        {/* Mobile */}
      
        <div className='md:hidden'>
          <div>
            <h1 className='mt-2.5 mb-2.5 text-xl font-bold blue_gradient'>
              B-hoone:
            </h1>
          </div>

          <hr className='mt-5 mb-5 border-divider'/>

          <div>
            <div className='grid grid-cols-1 gap-6'>
              <h2 className='mt-2.5 mb-2.5 font-bold text-base'>
                Placeholder h2
              </h2>
              <div>
                <p className='mb-12 text-lg'>
                  Placeholder paragraph
                </p>
              </div>

              <Image
                className="mb-5"
                src="/assets/images/logo.jpg"
                alt="LVG Logo"
                width={55}
                height={55}
              />
            </div>
          </div>

          <hr className='mt-5 mb-10 border-divider'/>
        
          <div>
            <div className='grid grid-cols-1 gap-6'>
              <h2 className='mt-2.5 mb-2.5 font-bold text-base'>
                Placeholder h2
              </h2>
              <div>
                <p className='mb-12 text-lg'>
                  Placeholder paragraph
                </p>
              </div>
              <Image
                className="mb-5"
                src="/assets/images/logo.jpg"
                alt="LVG Logo"
                width={55}
                height={55}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default B