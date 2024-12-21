'use client';

import Link from 'next/link';
import React from 'react';

const Home = () => {
  return (
    <div>
        <h1 className="w-full flex-center flex-col head_text text-center">
          Liikumine on rõõm!
        </h1>
        <br className="max-md:hidden" />
        <span className="w-full flex-center flex-col head_text text-center blue_gradient">
          Liigume, LVG õpilased!              
        </span>
        <p className="w-full flex-center flex-col desc text-center">
          Leiage oma endale kasulikud nõuanned, et koguaeg terveks jääda.
        </p>
        <div className="text-center pt-36 md:mt-24 text-lg font-extrabold text-black">
          <Link href="/rajad">
            <p className="black_btn">
              Vali oma rada!
            </p>
          </Link>
        </div>
    </div>
  )
}

export default Home