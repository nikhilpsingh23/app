"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: "/images/career/career2.jpg",
            title: "Innovative Solutions",
            description: "Building tomorrow's technology today"
        },
        {
            image: "/images/career/career4.jpg",
            title: "Expert Team",
            description: "Dedicated professionals delivering excellence"
        },
        {
            image: "/images/career/career3.jpg",
            title: "Global Reach",
            description: "Serving clients worldwide with cutting-edge solutions"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="w-full">
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
                {/* Background Slides */}
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                            index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                        <Image
                            src={slide.image}
                            alt="Background"
                            fill
                            className="object-cover"
                            priority={index === 0}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#ee83a1]/80 via-[#b66be8]/80 to-[#7f65e4]/80" />
                    </div>
                ))}

                {/* Fixed Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                            Join Our Growing Team
                        </h2>
                        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
                            We're looking for passionate individuals who want to make a difference. 
                            Join us in creating innovative solutions that shape the future.
                        </p>
                    </div>
                </div>

                {/* Navigation Buttons and Indicators remain the same */}
                <button 
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm transition-all"
                >
                    <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button 
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-sm transition-all"
                >
                    <ChevronRight className="w-6 h-6 text-white" />
                </button>

                {/* Slide Indicators */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-2 h-2 rounded-full transition-all ${
                                index === currentSlide ? 'bg-white w-6' : 'bg-white/50'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HeroSection;