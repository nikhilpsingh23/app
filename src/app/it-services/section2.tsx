"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Section2 = () => {
    return (
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1200px] mt-12 mx-auto py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <div>
                        <div className="flex  space-x-2 mb-4">
                    <div className="w-2 h-1 bg-gradient-to-r from-[#ee83a1] via-[#b66be8] to-[#7f65e4]"></div>
                        <div className="w-2 h-1 bg-gradient-to-r from-[#ee83a1] via-[#b66be8] to-[#7f65e4]"></div>
                        <div className="w-12 h-1 bg-gradient-to-r from-[#ee83a1] via-[#b66be8] to-[#7f65e4]"></div>
                    </div>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                            Tech Development &
                            Digital Marketing Companies
                            </h2>
                        </div>
                        
                        <p className="text-gray-600 text-base md:text-lg">
                            You are welcome to Aimbeat, providing comprehensive Web and Software 
                            Application Development Services from the experts. There are no hassles, 
                            only solutions at reasonable prices. Trying to find services like Web Design, 
                            Software Development, Mobile App Development, Digital marketing, Search 
                            Engine Optimization (SEO), Social Media Marketing (SEM), and E-commerce 
                            Solutions, we've it all. No more wandering eyes to seek the foremost suitable 
                            solutions once we are here for you with exclusive digital packages to satisfy 
                            your online business presence needs.
                        </p>

                        <Link 
                            href="/about"
                            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-300"
                        >
                            <span className="mr-2">→</span>
                            Read More
                        </Link>
                    </div>

                    {/* Right Image */}
                    <div className="relative h-[300px] md:h-[400px] lg:h-[450px]">
                        <Image
                            src="/images/it-services/gif.gif"
                            alt="Software Development Team"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Section2;