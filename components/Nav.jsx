import Link from 'next/link';
import Image from 'next/image';

const Nav = () => {
  return (
    <nav className="flex-between w-full mb-16 pt-3">
        <Link href="/" className="flex-center">
        <Image
        src="/assets/images/logo.jpg"
        alt="LVG Logo"
        width={65}
        height={65}
        />
        <p className="logo_text">&nbsp;&nbsp;LVG terviserajad</p>
        </Link>

        <Link href="/about">
        <p>About</p>
        </Link>
    </nav>
    )
}
export default Nav