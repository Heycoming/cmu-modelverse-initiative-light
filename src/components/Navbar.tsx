'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-zinc-200 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src="/media/navbar-logo.png" alt="Intelligence Cubed" className="h-10 md:h-14 w-auto object-contain" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {['Vision', 'Team', 'Research', 'Partners'].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className={`text-sm font-medium transition-colors ${scrolled ? 'text-zinc-600 hover:text-black' : 'text-zinc-600 hover:text-black'}`}
            >
              {item}
            </Link>
          ))}
          <a href="https://intelligencecubed.io/" target="_blank" rel="noreferrer" className="px-5 py-2 bg-black text-white text-xs font-bold rounded-full hover:bg-[#C41230] transition-all">
            Intelligence Cubed
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-zinc-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-zinc-200 p-6 flex flex-col gap-6 md:hidden animate-in fade-in slide-in-from-top-5">
          {['Vision', 'Team', 'Research', 'Partners'].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-lg font-medium text-zinc-600"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
