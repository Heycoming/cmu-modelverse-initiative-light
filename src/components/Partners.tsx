'use client';

import React from 'react';

const Partners = () => {
  const partners = [
    { name: "Carnegie Mellon University", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Carnegie_Mellon_University_wordmark.svg" },
    { name: "Amazon Web Services", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
    { name: "Google DeepMind", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Google_DeepMind_logo.svg" },
    { name: "Y Combinator", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Y_Combinator_logo.svg" },
    { name: "Stanford University", logo: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Stanford_University_wordmark.svg" }
  ];

  return (
    <section id="partners" className="py-24 bg-black border-t border-white/5">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-sm font-black uppercase tracking-[0.3em] text-gray-500 mb-12">
          Partnering with World-Class Institutions
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
          {partners.map((partner, i) => (
            <div key={i} className="h-12 flex items-center justify-center">
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="max-h-full max-w-[180px] object-contain"
                onError={(e) => {
                  (e.target as any).src = `https://ui-avatars.com/api/?name=${partner.name}&background=333&color=fff`;
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
