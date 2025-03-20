import React from 'react';
import { LandingHero } from './section/hero-section/demo';

const CorporateWebsitePage = () => {
  return (
    <div className="min-h-screen pt-20">  {/* Added pt-20 for navbar height */}
      <div className="container mx-auto px-4 py-10">
        <h1 className="py-5 text-center text-4xl font-bold bg-gradient-to-r from-[#47bfe6] via-[#4747c1] to-[#10187e] bg-clip-text text-transparent mb-8">
          Corporate Website Development
        </h1>
        
        <div className="flex flex-col gap-10">
          <section>
            <LandingHero />
          </section>
          {/* Add other sections here */}
        </div>
      </div>
    </div>
  );
};

export default CorporateWebsitePage;