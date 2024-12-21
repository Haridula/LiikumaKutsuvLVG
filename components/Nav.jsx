'use client';

import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const Nav = () => {
  return (
    <nav className="flex-between w-full mb-8 pt-4">
        <Link href="/" className="flex-center">
          <Image
            src="/assets/images/logo.jpg"
            alt="LVG Logo"
            width={65}
            height={65}
          />
        <p className="logo_text">
          &nbsp;&nbsp;LVG terviserajad
        </p>
        </Link>

        <Link href="/about">
          <p className="font-semibold text-sm tracking-wide">
            About
          </p>
        </Link>
    </nav>
    )
}
export default Nav