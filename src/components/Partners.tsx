'use client';

import React from 'react';

const PartnerCard = ({ name, logo, href }: { name: string, logo?: string, href?: string }) => {
  const content = (
    <div className="flex items-center justify-center p-4 bg-zinc-50 border border-zinc-200 rounded-xl hover:border-zinc-300 hover:bg-zinc-100 transition-all group h-20 shadow-sm">
      {logo ? (
        <img 
          src={logo} 
          alt={name} 
          className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all opacity-70 group-hover:opacity-100" 
          onError={(e) => {
            (e.target as any).style.display = 'none';
            (e.target as any).nextSibling.style.display = 'block';
          }}
        />
      ) : null}
      <span className={`${logo ? 'hidden' : 'block'} text-zinc-500 group-hover:text-black font-bold tracking-tight transition-colors`}>{name}</span>
    </div>
  );

  if (href) {
    return <a href={href} target="_blank" rel="noreferrer" className="block">{content}</a>;
  }
  return content;
};

const Partners = () => {
  const investors = [
    { name: "Taisu", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Y_Combinator_logo.svg" }, // Placeholder
    { name: "BNB Chain", logo: "" },
    { name: "Solana", logo: "" },
    { name: "Amber DSRV", logo: "" },
    { name: "Cardano", logo: "" },
    { name: "Cloudflare", logo: "" },
    { name: "Google Cloud", logo: "" },
    { name: "Microsoft", logo: "" },
    { name: "AWS", logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
    { name: "One Piece Lab", logo: "" },
    { name: "Alliance DAO", logo: "" },
    { name: "Orange DAO", logo: "" }
  ];

  const trustedBy = [
    { name: "Weex", href: "https://www.weex.com/news/detail/solana-x402-hackathon-innovations-in-ai-and-blockchain-245933" },
    { name: "TechFlow", href: "https://www.techflowpost.com/article/detail_29319.html" },
    { name: "Odaily", href: "https://www.odaily.news/en/post/5207811" },
    { name: "WJBF", href: "https://www.wjbf.com/business/press-releases/globenewswire/9525799/onepiece-labs-x-solana-accelerator-officially-launches/" },
    { name: "Bitget", href: "https://www.bitget.com/news/detail/12560605084981" },
    { name: "Morningstar", href: "https://www.morningstar.com/news/globe-newswire/9525799/onepiece-labs-solana-accelerator-officially-launches" },
    { name: "AP News", href: "https://apnews.com/press-release/globenewswire-mobile/onepiece-labs-solana-accelerator-officially-launches-f2e8e0a2478df30533933fdfe8f07a5e" },
    { name: "Benzinga", href: "https://www.benzinga.com/pressreleases/25/09/g47571343/onepiece-labs-solana-accelerator-officially-launches" },
    { name: "Business Insider", href: "https://markets.businessinsider.com/news/stocks/onepiece-labs-solana-accelerator-officially-launches-1035128439" },
    { name: "MarketWatch", href: "https://www.marketwatch.com/press-release/onepiece-labs-solana-accelerator-officially-launches-7b06ee13?mod=search_headline" },
    { name: "Street Insider", href: "https://www.streetinsider.com/Globe+Newswire/OnePiece+Labs+%C3%97+Solana+Accelerator+Officially+Launches/25313438.html" },
    { name: "The Block Beats", href: "https://www.theblockbeats.info/news/60354" }
  ];

  return (
    <section id="partners" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-zinc-900 mb-12 text-center">Investors & Partners</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {investors.map((item, i) => (
              <PartnerCard key={i} name={item.name} logo={item.logo} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-zinc-900 mb-12 text-center">Trusted By</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {trustedBy.map((item, i) => (
              <PartnerCard key={i} name={item.name} href={item.href} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
