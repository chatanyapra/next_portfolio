"use client"
import { useRef } from 'react';
import { FaHouse, FaCircleInfo, FaBriefcase, FaBookOpenReader } from "react-icons/fa6";
import './Navbar.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// import ProfileDropdown from './ProfileDropdown';
// import { SessionProvider } from 'next-auth/react';
import Image from 'next/image';
import ToggleButton from './ui/ToggleButton';

const Navbar = () => {
    const navbarRef = useRef(null);
    const logoAnim = useRef(null);
    const pathname = usePathname();
    const logo = "/assets/logo_small.png";

    return (
        <>
            <nav ref={navbarRef} className={`relative md:fixed flex flex-col top-0 left-0 w-full p-3 main-color transition-opacity duration-300 ease-out z-20`}>
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    <a ref={logoAnim} href="#" className="flex items-center relative">
                        <div className='w-[220px] h-[60px] relative'>
                            <Image
                                src={logo}
                                fill
                                sizes="(max-width: 640px) 75vw, 384px"
                                alt="Chatanya Logo"
                                className="w-[220px] drop-shadow-[0_0_30px_black]"
                                priority
                            />
                        </div>

                    </a>
                    <div className='flex'>
                        <div className="hidden md:flex space-x-4 mt-2 ">
                            <Link href="/"
                                className={`px-3 py-2 rounded-md text-base font-medium drop-shadow-lg ${pathname === '/' ? 'text-gradient text-custom-bold' : ' hover:text-blue-400'}`}
                            >
                                Home
                            </Link>
                            <Link href="/about"
                                className={`px-3 py-2 rounded-md text-base font-medium drop-shadow-lg ${pathname.includes('/about') ? 'text-gradient text-custom-bold' : ' hover:text-blue-400'}`}
                            >
                                About
                            </Link>
                            <Link href="/work"
                                className={`px-3 py-2 rounded-md text-base font-medium drop-shadow-lg ${pathname.includes('/work') ? 'text-gradient text-custom-bold' : ' hover:text-blue-400'}`}
                            >
                                Work
                            </Link>
                            <Link href="/blogs"
                                className={`px-3 py-2 rounded-md text-base font-medium drop-shadow-lg ${pathname.includes('/blogs') ? 'text-gradient text-custom-bold' : ' hover:text-blue-400'}`}
                            >
                                Blogs
                            </Link>
                        </div>
                        <div className='px-3 py-2 rounded-md text-base font-medium mt-1'>
                            <ToggleButton />
                            {/* <SessionProvider>
                                <ProfileDropdown />
                            </SessionProvider> */}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <nav className=' w-full fixed bottom-3 z-20 md:hidden flex flex-wrap justify-between items-center mx-auto transition-opacity duration-300 px-2'>
                <div className='container flex flex-wrap justify-around items-center mx-auto main-color rounded-full py-3 text-3xl'>
                    <Link href="/">
                        <FaHouse className={`cursor-pointer ${pathname === '/' ? 'text-blue-500' : ''}`} />
                    </Link>
                    <Link href="/about">
                        <FaCircleInfo className={`cursor-pointer ${pathname.includes('/about') ? 'text-blue-500' : ''}`} />
                    </Link>
                    <Link href="/work">
                        <FaBriefcase className={`cursor-pointer ${pathname.includes('/work') ? 'text-blue-500' : ''}`} />
                    </Link>
                    <Link href="/blogs">
                        <FaBookOpenReader className={`cursor-pointer ${pathname.includes('/blogs') ? 'text-blue-500' : ''}`} />
                    </Link>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
