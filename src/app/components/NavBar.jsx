"use client"
import Link from 'next/link';
import React, { useState } from 'react';

const NavBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="bg-gradient-to-t from-transparent to-zinc-900/90 fixed top-0 w-full z-20">
            <div className="container mx-auto flex items-center justify-between py-8 px-4 sm:px-8">
                {/* Logo */}
                <Link href="/" className="text-3xl font-bold text-stone-300 hover:text-white transition duration-500 ease-in-out">
                    Chillhop World
                </Link>

                {/* Mobile Menu Button */}
                <button
                    className="sm:hidden text-stone-300 hover:text-white focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>

                {/* Desktop Menu */}
                <ul className="hidden sm:flex flex-row items-center gap-6">
                    <li>
                        <Link href="/albums" className="text-stone-200 hover:text-white transition ease-in-out font-semibold text-lg">
                            Releases
                        </Link>
                    </li>
                    <li>
                        <Link href="/#listen" className="text-stone-200 hover:text-white transition ease-in-out font-semibold text-lg">
                            Listen
                        </Link>
                    </li>
                    <li>
                        <Link href="/#contact" className="text-stone-200 hover:text-white transition ease-in-out font-semibold text-lg">
                            Contact
                        </Link>
                    </li>
                </ul>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <ul className="absolute top-16 left-0 w-full bg-zinc-900/95 flex flex-col items-center gap-4 py-6 sm:hidden">
                        <li>
                            <Link href="/albums" className="text-stone-200 hover:text-white transition ease-in-out font-semibold text-lg">
                                Releases
                            </Link>
                        </li>
                        <li>
                            <Link href="/#listen" className="text-stone-200 hover:text-white transition ease-in-out font-semibold text-lg">
                                Listen
                            </Link>
                        </li>
                        <li>
                            <Link href="/#contact" className="text-stone-200 hover:text-white transition ease-in-out font-semibold text-lg">
                                Contact
                            </Link>
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
