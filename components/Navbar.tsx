"use client"
import { useState, useRef } from 'react';
import logo from "../assets/logo_small.png"
import { FaHouse, FaCircleInfo, FaBriefcase, FaBookOpenReader } from "react-icons/fa6";
import './Navbar.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ProfileDropdown from './ProfileDropdown';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const navbarRef = useRef(null);
    const logoAnim = useRef(null);
    const pathname = usePathname();


    return (
        <>
            <nav ref={navbarRef} className={`relative md:fixed flex flex-col top-0 left-0 w-full p-3 main-color transition-opacity duration-300 ease-out z-20 ${isScrolled ? 'navbar-animation' : ''}`}>
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <a ref={logoAnim} href="#" className="flex items-center">
                        <img src={logo.src} className='h-14' style={{ filter: "drop-shadow(0 0 30px black)" }} alt="" />
                    </a>
                    <div className='flex'>
                        <div className="hidden md:flex space-x-4 mt-2 ">
                            <Link href="/"
                                className={`px-3 py-2 rounded-md text-base font-medium drop-shadow-lg ${pathname === '/' ? 'text-blue-600' : 'text-white dark:text-black hover:text-blue-400'}`}
                            >
                                Home
                            </Link>
                            <Link href="/about"
                                className={`px-3 py-2 rounded-md text-base font-medium drop-shadow-lg ${pathname === '/about' ? 'text-blue-600' : 'text-white dark:text-black hover:text-blue-400'}`}
                            >
                                About
                            </Link>
                            <Link href="/work"
                                className={`px-3 py-2 rounded-md text-base font-medium drop-shadow-lg ${pathname === '/work' ? 'text-blue-600' : 'text-white dark:text-black hover:text-blue-400'}`}
                            >
                                Work
                            </Link>
                            <Link href="/blogs"
                                className={`px-3 py-2 rounded-md text-base font-medium drop-shadow-lg ${pathname === '/blogs' ? 'text-blue-600' : 'text-white dark:text-black hover:text-blue-400'}`}
                            >
                                Blogs
                            </Link>
                        </div>
                        <div className='px-3 py-2 rounded-md text-base font-medium mt-1'>
                            <ProfileDropdown />
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <nav className='tab-menu w-full fixed bottom-3 z-20 md:hidden flex flex-wrap justify-between items-center mx-auto transition-opacity duration-300 px-2'>
                <div className='container flex flex-wrap justify-around items-center mx-auto main-color rounded-full py-3 text-3xl text-white dark:text-gray-900'>
                    <Link href="/">
                        <FaHouse className={`icon-shadow ${pathname === '/' ? 'text-blue-500' : ''}`} />
                    </Link>
                    <Link href="/about">
                        <FaCircleInfo className={`icon-shadow ${pathname === '/about' ? 'text-blue-500' : ''}`} />
                    </Link>
                    <Link href="/work">
                        <FaBriefcase className={`icon-shadow ${pathname === '/work' ? 'text-blue-500' : ''}`} />
                    </Link>
                    <Link href="/blogs">
                        <FaBookOpenReader className={`icon-shadow ${pathname === '/blogs' ? 'text-blue-500' : ''}`} />
                    </Link>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
