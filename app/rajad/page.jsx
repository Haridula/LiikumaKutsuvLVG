'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const rajad = () => {
  return (
    <div className='app'>
        <div>
            <p className='head_text text-center blue_gradient mb-10'>
                Vali hoone alustamiseks...
            </p>

            <Image
                className='mb-10'
                src="/assets/images/plan.png"
                alt="LVG Logo"
                width={600}
                height={600}
            />

            {/* Desktop */}

            <Link href="/rajad/A">
                <button className="blue_btn text-xl xs:hidden absolute font-bold left-1/4 max-sm:hidden max-md:hidden">
                    A-hoone
                </button>
            </Link>
        
            <Link href="/rajad/B">
                <button className="blue_btn text-xl font-bold right-1/4 absolute max-sm:hidden max-md:hidden">
                    B-hoone
                </button>
            </Link>

            {/* Mobile */}
            
            <Link href="/rajad/A">
                <button className="blue_btn text-base font-bold absolute left-3 sm:left-3 md:hidden">
                    A-hoone
                </button>
            </Link>

            <Link href="/rajad/B">
                <button className="blue_btn text-base font-bold absolute right-3 md:hidden">
                    B-hoone
                </button>
            </Link>
        </div>
    </div>
  );
}

export default rajad