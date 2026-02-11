'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-white">
      {/* Background elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#C41230]/5 blur-[150px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#6d28d9]/5 blur-[150px] rounded-full"></div>
      
      <div className="w-full h-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full items-stretch">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative hidden lg:block overflow-hidden"
          >
            <img 
              src="/media/hero-head.png" 
              alt="Modelverse Concept" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Overlay to blend or soften if needed */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center px-6 lg:px-20 text-center lg:text-left pt-20 lg:pt-0"
          >
            {/* Mobile Image (Visible only on small screens) */}
            <div className="lg:hidden mb-8 rounded-2xl overflow-hidden shadow-xl">
               <img src="/media/hero-head.png" alt="Modelverse Concept" className="w-full h-auto" />
            </div>

            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-widest uppercase bg-zinc-100 border border-zinc-200 rounded-full text-[#C41230] self-center lg:self-start">
              Intelligence Cubed × Carnegie Mellon University
            </span>
            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-[1.1] text-zinc-900">
              Modelverse Dev <br />
              <span className="text-zinc-400">Initiative</span>
            </h1>
            <p className="max-w-xl mx-auto lg:mx-0 text-zinc-600 text-xl leading-relaxed mb-12">
              A collaborative research ecosystem pioneering decentralized intelligence and cost-effective AGI development.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <a href="#vision" className="px-8 py-4 bg-black text-white font-bold rounded-full hover:bg-[#C41230] transition-all transform hover:scale-105 active:scale-95 shadow-xl">
                Explore Our Vision
              </a>
              <a href="#team" className="px-8 py-4 bg-transparent border border-zinc-200 text-zinc-900 font-bold rounded-full hover:bg-zinc-50 transition-all">
                Meet our Team
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 right-10 animate-bounce opacity-20 hidden lg:block">
        <div className="w-px h-16 bg-gradient-to-b from-zinc-900 to-transparent mx-auto"></div>
      </div>
    </section>
  );
};

export default Hero;
