"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        '/images/it-services/slide1.png',
        '/images/it-services/slide2.jpg',
        '/images/it-services/slide3.png',
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full h-[600px] overflow-hidden">
            {/* Carousel Slides */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                        currentSlide === index ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <Image
                        src={slide}
                        alt={`Slide ${index + 1}`}
                        fill
                        className="object-cover"
                        priority={index === 0}
                    />
                </div>
            ))}

            {/* Overlay with Text */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent">
                <div className="max-w-[1200px] mx-auto h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8">
                    <div className="space-y-6 max-w-2xl animate-fadeIn">
                        <h2 className="text-sm sm:text-base text-white/80 font-medium tracking-wider">
                            SERVE SOFTWARE DEVELOPMENT, MOBILE APP DEVELOPMENT, WEBSITE DESIGNING & ERP
                        </h2>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight animate-slideUp">
                            Software Development Company
                        </h1>
                        <p className="text-lg text-white/90 animate-slideUp delay-200">
                            A nice responsive website is essential for all businesses to sell their products and services.
                        </p>
                        <Link 
                            href="/contact"
                            className="inline-block border-2 border-white text-white px-8 py-3 rounded hover:bg-white hover:text-black transition-all duration-300 animate-slideUp delay-300"
                        >
                            Start Your Project
                        </Link>
                    </div>
                </div>
            </div>

            {/* Carousel Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`h-3 rounded-full transition-all duration-300 bg-gradient-to-r from-[#ee83a1] via-[#b66be8] to-[#7f65e4] ${
                            currentSlide === index ? 'w-12 opacity-100' : 'w-3 opacity-50'
                        }`}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Hero;