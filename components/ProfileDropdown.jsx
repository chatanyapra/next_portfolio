"use client"
import { useState, useRef, useEffect } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { signOut } from 'next-auth/react';
// import ToggleButton from './ToggleButton';
// import axios from 'axios';
// import toast from 'react-hot-toast';
// import { useThemeContext } from '../context/ThemeContext';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

function ProfileDropdown() {
    // const { toggleDarkMode } = useThemeContext();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const { data: session, status } = useSession();
    if (status === 'loading') return <p>Loading...</p>;
    if (!session) return <p>You are not logged in</p>;


    const toggleDropdown = () => setIsOpen(!isOpen);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative inline-block" ref={dropdownRef}>
            <button
                onClick={toggleDropdown}
                className="flex items-center text-sm font-medium text-gray-700 bg-gray-200 rounded-full overflow-hidden"
            >
                {session ? (
                    <img src={`${session?.image}`} alt='profileImg' className='w-8 h-8' />
                ) : (
                    <FaUserCircle size={30} className="text-gray-500" />
                )}
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute right-0 w-48 h-fit mt-7 origin-top-right bg-[#070a29] dark:bg-gray-200 border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg overflow-hidden">
                    <div className="h-fit">
                        {!session ? (
                            <Link to={"/sign"}>
                                <button className="w-full px-4 py-2 text-left text-gray-200 dark:text-gray-700 hover:bg-gray-500">Login</button>
                            </Link>
                        ) : (
                            <>
                                {session.isAdmin && (
                                    <>
                                        <Link to={'/projectedit'}>
                                            <button className="w-full px-4 py-2 text-left text-gray-200 dark:text-gray-700 hover:bg-gray-500">Project Edit</button>
                                        </Link>
                                        <Link to={'/blogedit'}>
                                            <button className="w-full px-4 py-2 text-left text-gray-200 dark:text-gray-700 hover:bg-gray-500">Blog Edit</button>
                                        </Link>
                                    </>
                                )}
                                <button className="w-full px-4 py-2 text-left text-gray-200 dark:text-gray-700 hover:bg-gray-500" onClick={() => signOut({ callbackUrl: '/' })}>Logout</button>
                            </>
                        )
                        }
                        {/* <button onClick={toggleDarkMode} className="w-full px-4 pb-1.5 text-left text-gray-200 dark:text-gray-700 hover:bg-gray-500 flex justify-between items-center">
                            <div className='pt-1.5'>Mode</div>
                            <div>
                                <ToggleButton />
                            </div>
                        </button> */}
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProfileDropdown;
