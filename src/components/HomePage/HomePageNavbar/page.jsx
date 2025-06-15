'use client';

import React from 'react';
import { FaSignInAlt, FaDownload } from 'react-icons/fa'; 
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="absolute top-10 left-6 md:left-[102px] w-[calc(100%-48px)] max-w-[1280px] h-[75.62px] bg-white rounded-[50px] border-2 border-white p-2 flex items-center justify-between z-50">
      {/* Logo with Home Route */}
      <Link href="/" className="h-[71.62px] w-[320.41px] flex-shrink-0 group">
        <div className="h-full w-full transition-transform group-hover:scale-105">
          <Image
            src="/image/margdalogo.png"
            alt="Margda Workplace Logo"
            width={320.41}
            height={71.62}
            className="h-full w-full object-contain"
            priority
          />
        </div>
      </Link>

      {/* Navigation Controls */}
      <div className="flex items-center space-x-8 pr-6">
        <Link
          href="/login"
          className="flex border-none items-center hover:scale-105 space-x-2 group"
        >
          <FaSignInAlt className="h-8 w-8 text-gray-700 group-hover:text-gray-900 transition-colors" />
          <span
            className="text-[20px] font-semibold bg-gradient-to-r from-gray-600 to-gray-900 bg-clip-text text-transparent group-hover:from-gray-700 group-hover:to-gray-900 transition-all"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Login
          </span>
        </Link>

        <Link
          href=""
          className="flex items-center border-none space-x-2 group px-5 py-2 transition-all hover:scale-105"
        >
          <FaDownload
            className="h-6 w-8 text-gray-700 group-hover:text-gray-900 transition-colors" 
          />
          <span
            className="text-[19px] font-semibold bg-gradient-to-r from-gray-600 to-gray-900 bg-clip-text text-transparent group-hover:from-gray-700 group-hover:to-gray-900 transition-all"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Download App
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;