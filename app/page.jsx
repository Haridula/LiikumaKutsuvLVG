'use client';

import Feed from '@components/Feed';
import { useEffect, useState } from 'react'
import Link from 'next/link';
import { Children } from 'react';

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
           <Feed />
    </div>
  )
}

export default Home