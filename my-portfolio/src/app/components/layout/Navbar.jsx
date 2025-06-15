"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Projects", href: "/Projects" },
  { name: "Blogs", href: "/Blogs" },
  { name: "Contact", href: "/Contact" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0D1117]/80 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-white hover:text-blue-400 transition"
        >
          <strong>AF</strong>
        </Link>

        {/* Nav Links */}
        <ul className="flex items-center gap-6 text-sm font-medium">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`relative px-1 py-1 text-gray-300 hover:text-white transition duration-300 ${
                    isActive ? "text-white" : ""
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-blue-500 rounded-full" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

