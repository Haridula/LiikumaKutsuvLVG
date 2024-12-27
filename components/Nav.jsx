'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Nav() {
  const router = useRouter();

  const changeLanguage = (newLocale) => {
    const currentPathname = window.location.pathname;
    const currentSearch = window.location.search;
    
    // Remove any existing locale from the path
    const pathWithoutLocale = currentPathname.replace(/^\/(en|et)/, '')

    // Debugging: Check if router and router.push are defined
    console.log('Router:', router);
    console.log('Router.push:', router.push);

    // Ensure router is defined before calling push
    if (router && typeof router.push === 'function') {
      router.push(`/${newLocale}${pathWithoutLocale}${currentSearch}`)
        .catch((err) => {
          console.error('Error while changing language:', err);
        });
    } else {
      console.error('Router is not defined or push method is not available');
    }
  };

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

      <div>
      <button onClick={() => changeLanguage('en')}>English&nbsp;</button>
      <button onClick={() => changeLanguage('et')}>Eesti</button>
      </div>
    </nav>
  );
}