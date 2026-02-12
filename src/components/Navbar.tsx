'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BASE_PATH } from '@/lib/constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Vision', href: '#vision' },
    { name: 'Team', href: '#team' },
    { name: 'Research', href: '#research' },
    { name: 'Partners', href: '#partners' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 group">
          {/* Increased size for the nav logo */}
          <div className="relative h-16 w-auto flex items-center">
            <img 
              src={`${BASE_PATH}/media/nav-logo-new.png`} 
              alt="i3 x CMU Logo" 
              className="h-full w-auto object-contain"
            />
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-zinc-600 hover:text-[#C41230] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-5 py-2.5 bg-zinc-900 hover:bg-[#C41230] text-white text-sm font-semibold rounded-full transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Join Initiative
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-zinc-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-zinc-100"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-zinc-600 hover:text-[#C41230] font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
