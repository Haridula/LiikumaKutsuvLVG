'use client';

import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const tracks = () => {
  return (
    <div>
        <p className='head_text text-center blue_gradient mb-10'>
            Vali hoone alustaseks...
        </p>

        <Image
            src="/assets/images/plan.png"
            alt="LVG Logo"
            width={600}
            height={600}
            className='mb-10'
        />

        <Link href="en/tracks/B">
            <button className="blue_btn text-xl xs:hidden absolute font-bold left-1/4 max-sm:hidden">
                B-wing
            </button>
        </Link>

        <Link href="en/tracks/B">
            <button className="blue_btn text-base font-bold absolute left-3 sm:left-3 md:hidden">
                B-wing
            </button>
        </Link>
        
        <Link href="en/tracks/A">
            <button className="blue_btn text-xl font-bold right-1/4 absolute max-sm:hidden">
                A-wing
            </button>
        </Link>

        <Link href="en/tracks/A">
            <button className="blue_btn text-base font-bold absolute right-3 md:hidden">
                A-wing
            </button>
        </Link>
    </div>
  )
}

export default tracks