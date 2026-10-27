import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0A1F26]/80 backdrop-blur-md p-4 border-b border-cyan-900/30">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left side Logo and menu items */}
        <Link href="/">
          <Image 
            src="/assets/logo/ES-logo.png" 
            alt="Empowered Stream Logo" 
            width={150}
            height={75} 
            priority 
            className="cursor-pointer"
            />
        </Link>
        
        {/* Right side menu items (future) */}
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <h1 className="text-cyan-400 font-bold text-xl tracking-tight cursor-pointer">
            Empowered Stream
          </h1>
        </Link>
      </div>
    </header>
  );
};

export default Header