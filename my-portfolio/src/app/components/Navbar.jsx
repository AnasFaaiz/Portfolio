"use client";
import Link from "next/link";
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname();

    return (
        <nav className="fixed top-0 w-full h-12 bg-[#0D1117] shadow-sm z-50">
            <div className="max-w-7x1 mx-auto px-6 h-full flex items-center justify-between">
                <Link href="/" className="text-xl font-bold text-white hover:text-blue-400 transition-colors"><strong>AF</strong></Link>

                <ul className="flex items-center space-x-8">
                    {/* <li className="nav-item">
                        <Link href="/" className={`px-2 py-1 text-gray-300 hover:text-white transition-colors ${pathname === '/' ? 'active' : ''}`}>Home</Link>
                    </li> */}
                    <li className="nav-item">
                        <Link href="/Projects" className={`px-2 py-1 text-gray-300 hover:text-white transition-colors ${pathname === '/Projects' ? 'active' : ''}`}>Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/Blogs" className={`px-2 py-1 text-gray-300 hover:text-white transition-colors ${pathname === '/Blogs' ? 'active' : ''}`}>Blogs</Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/Contact" className={`px-2 py-1 text-gray-300 hover:text-white transition-colors ${pathname === '/Contact' ? 'active' : ''}`}>Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;