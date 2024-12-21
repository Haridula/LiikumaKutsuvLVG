'use client';

import Link from 'next/link';
import React from 'react'

const about = () => {
  return (
    <div className='mt-5 mb-5'>
      <h1 className='mt-2.5 mb-2.5 text-base font-bold text-black blue_gradient'>
        See veebirakendus tehtud spetsiaalselt praktilise töö jaoks.
      </h1>
      <hr className='mt-5 mb-2.5'/>
      <p className='mt-5 mb-5 text-lg text-black'> 
        <strong>Autor:</strong> Konstantin Razdolski
      </p>

      <p className='mt-5 mb-5 text-lg text-black'>
          <Link className='hover:underline' href="mailto:haridula@proton.me">
            <strong>Email:</strong> haridula@proton.me
          </Link>
      </p>
          
      <p className=' mt-5 mb-5 text-lg text-black'>
        <Link className='hover:underline' href="https://github.com/Haridula">
            <strong>GitHub:</strong> Haridula
        </Link>
      </p>
    </div>
  )
}

export default about