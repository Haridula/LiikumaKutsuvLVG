'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react'
 
const Feed = () => {
    return(
        <div className="text-center pt-36 md:mt-24 text-lg font-extrabold text-black">
            <Link href="/rajad">
                <p className="black_btn">
                    Vali oma rada!
                </p>
            </Link>
        </div>
    )
}

export default Feed