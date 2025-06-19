"use client";

import { useState, useRef, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import ToggleButton from "./ui/ToggleButton";
import { useTheme } from "next-themes";

function ProfileDropdown() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const { data: session, status } = useSession();

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
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
        {session?.user?.image ? (
          <img src={session.user.image} alt="profileImg" className="w-8 h-8" />
        ) : (
          <FaUserCircle size={30} className="text-gray-500" />
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 w-48 h-fit mt-7 origin-top-right bg-[#070a29] dark:bg-gray-200 border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg overflow-hidden">
          <div className="h-fit">
            {!session ? (
              <Link href="/login">
                <button className="w-full px-4 py-2 text-left text-gray-200 dark:text-gray-700 hover:bg-gray-500">
                  Login
                </button>
              </Link>
            ) : (
              <>
                {(session.user as any)?.isAdmin && (
                  <>
                    <Link href="/projectedit">
                      <button className="w-full px-4 py-2 text-left text-gray-200 dark:text-gray-700 hover:bg-gray-500">
                        Project Edit
                      </button>
                    </Link>
                    <Link href="/blogedit">
                      <button className="w-full px-4 py-2 text-left text-gray-200 dark:text-gray-700 hover:bg-gray-500">
                        Blog Edit
                      </button>
                    </Link>
                  </>
                )}
                <button
                  className="w-full px-4 py-2 text-left text-gray-200 dark:text-gray-700 hover:bg-gray-500"
                  onClick={() => signOut({ callbackUrl: "/" })}
                >
                  Logout
                </button>
              </>
            )}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-full px-4 pb-1.5 text-left text-gray-200 dark:text-gray-700 hover:bg-gray-500 flex justify-between items-center"
            >
              <div className="pt-1.5">Mode</div>
              <div>
                <ToggleButton />
              </div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileDropdown;
