'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#050505]">
      {/* Background elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#C41230]/10 blur-[150px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#6d28d9]/10 blur-[150px] rounded-full"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <img 
              src="/media/hero-head.png" 
              alt="Modelverse Concept" 
              className="w-full max-w-2xl mx-auto rounded-2xl shadow-[0_0_50px_rgba(196,18,48,0.2)]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 text-center lg:text-left"
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-widest uppercase bg-white/5 border border-white/10 rounded-full text-[#C41230]">
              Intelligence Cubed × Carnegie Mellon University
            </span>
            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-[1.1] text-white">
              Modelverse Dev <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-500">Initiative</span>
            </h1>
            <p className="max-w-xl mx-auto lg:mx-0 text-zinc-300 text-xl leading-relaxed mb-12">
              A collaborative research ecosystem pioneering decentralized intelligence and cost-effective AGI development.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <a href="#vision" className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-[#C41230] hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                Explore Our Vision
              </a>
              <a href="#team" className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-full hover:bg-white/5 transition-all">
                Meet our Team
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
        <div className="w-px h-16 bg-gradient-to-b from-white to-transparent mx-auto"></div>
      </div>
    </section>
  );
};

export default Hero;
