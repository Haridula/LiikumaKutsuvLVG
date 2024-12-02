'use client';

import { useEffect, useState } from 'react'
import '@styles/globals.css';
import Image from 'next/image';
import Link from 'next/link';

const rajad = () => {
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

        <Link href="/rajad/A">
            <button className="blue_btn text-xl xs:hidden absolute font-bold left-1/4 max-sm:hidden">
                A-hoone
            </button>
        </Link>

        <Link href="/rajad/A">
            <button className="blue_btn text-base font-bold absolute left-3 sm:left-3 md:hidden">
                A-hoone
            </button>
        </Link>
        
        <Link href="/rajad/B">
            <button className="blue_btn text-xl font-bold right-1/4 absolute max-sm:hidden">
                B-hoone
            </button>
        </Link>

        <Link href="/rajad/B">
            <button className="blue_btn text-base font-bold absolute right-3 md:hidden">
                B-hoone
            </button>
        </Link>
    </div>
  )
}

export default rajad