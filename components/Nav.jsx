import Link from 'next/link';
import Image from 'next/image';

const Nav = () => {
  return (
    <nav className="flex-between w-full mb-16 pt-3">
        <Link href="/" className="flex-center logo_text">
            <p>
            Liikuma Kutsuv Kool (LVG)
            </p>
        </Link>

        <Link href="/about">
        <p>About</p>
        </Link>
    </nav>
    )
}
export default Nav