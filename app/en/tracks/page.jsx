'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const tracks = () => {
  return (
    <div className='app'>
        <div>
            <p className='head_text text-center blue_gradient mb-10'>
                Select the wing to start...
            </p>

            <Image
                src="/assets/images/plan.png"
                alt="LVG Logo"
                width={600}
                height={600}
                className='mb-10'
            />

            {/* Mobile */}

            <Link href="tracks/A">
                <button className="blue_btn text-xl xs:hidden absolute font-bold left-1/4 max-sm:hidden max-md:hidden">
                    A-wing
                </button>
            </Link>
        
            <Link href="tracks/B">
                <button className="blue_btn text-xl font-bold right-1/4 absolute max-sm:hidden max-md:hidden">
                    B-wing
                </button>
            </Link>

            {/* Desktop */}
            
            <Link href="tracks/A">
                <button className="blue_btn text-base font-bold absolute left-3 sm:left-3 md:hidden">
                    A-wing
                </button>
            </Link>

            <Link href="tracks/B">
                <button className="blue_btn text-base font-bold absolute right-3 md:hidden">
                    B-wing
                </button>
            </Link>
        </div>
    </div>
  );
}

export default tracks