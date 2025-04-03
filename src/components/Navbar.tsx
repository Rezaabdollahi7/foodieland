'use client';

import { useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { NAV_LINKS, SOCIAL_LINKS } from '@/consts/NavbarLinks';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white px-7 py-4 shadow-sm lg:py-6">
      <div className="nav-wrapper mx-auto flex items-center justify-between bg-white sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">
            <span className="font-lobster font-thin text-black">
              Foodieland<span className="text-orange-500">.</span>
            </span>
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none md:hidden"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={clsx(
            'absolute top-16 left-0 z-20 w-full bg-white p-4 transition-all duration-300 ease-in-out md:static md:flex md:w-auto md:items-center md:space-x-6 md:bg-transparent md:p-0 lg:space-x-8',
            isOpen ? 'block min-h-screen' : 'hidden'
          )}
        >
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="group relative rounded-3xl p-[2px] transition duration-300 hover:from-sky-300/50 hover:to-emerald-600/50 lg:hover:bg-gradient-to-r"
            >
              <span className="hover:bg-lightblue block rounded-3xl bg-white px-4 py-2 text-black transition duration-300 hover:text-sky-900 md:py-2">
                {label}
              </span>
            </Link>
          ))}

          <div className="mt-4 flex justify-center space-x-6 border-t border-gray-300 pt-12 md:hidden">
            {SOCIAL_LINKS.map(({ href, icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-orange-500"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="hidden space-x-6 md:flex">
          {SOCIAL_LINKS.map(({ href, icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-orange-500"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
