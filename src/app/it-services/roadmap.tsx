"use client"
import React from 'react';

const Roadmap = () => {
    const steps = [
        {
            number: "01",
            title: "Research and development",
            description: "During this phase, we help you finalize the functions list, prepare the technical requirements, and develop the application architecture with a roadmap of interactivity (UX)."
        },
        {
            number: "02",
            title: "Design and animation",
            description: "Design is everything your user interacts with. The better the impression your product makes, the more users it attracts. We avoid cookie-cutter solutions, creating an individualized design for your unique audience while anticipating your needs and expectations."
        },
        {
            number: "03",
            title: "Backend development",
            description: "Most applications involve data. Depending on functionality, this may include storing user data, storing photo and video content, search, showing actual products, and more. API documentation is tailored to communicate with mobile applications."
        },
        {
            number: "04",
            title: "Mobile development",
            description: "This is where we develop the confirmed design and dive into business logistics. We build products exactly as they were during the design phase, no short cuts or simplifications. Based on client needs, we also make micro-animations and transitions between screens."
        },
        {
            number: "05",
            title: "Quality assurance",
            description: "The development lifecycle involves continuous integration with end-to-end testing. The testing phase is separated only in word, never in deed: testing begins at the first sprint and ends with acceptance testing, which includes performance and real data testing."
        },
        {
            number: "06",
            title: "Release in Apple Store and Google Play",
            description: "We’re here to help with launching apps and prepping any necessary materials. This may involve a promotional video, text with key words for Apple Store and Google play, ASO expertise, and working out a strategy for moving forward."
        }
    ];

    return (
        <div className="w-full bg-[#f0d6ff] py-16 md:py-24">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work?</h2>
                    <p className="text-gray-600 mb-4">Our Software Development Process</p>
                    <div className="flex justify-center space-x-2">
                        <div className="w-2 h-1 bg-gradient-to-r from-[#ee83a1] via-[#b66be8] to-[#7f65e4]"></div>
                        <div className="w-2 h-1 bg-gradient-to-r from-[#ee83a1] via-[#b66be8] to-[#7f65e4]"></div>
                        <div className="w-12 h-1 bg-gradient-to-r from-[#ee83a1] via-[#b66be8] to-[#7f65e4]"></div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="relative p-6 bg-white rounded-lg shadow-sm group hover:shadow-md transition-shadow">
                            <div className="flex items-start space-x-4">
                                <span className="text-4xl font-bold text-gray-900 opacity-20">{step.number}</span>
                                <div className="space-y-3">
                                    <h3 className="text-xl font-semibold text-gray-800">{step.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                                </div>
                            </div>
                            {index < steps.length - 1 && (
                                <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-8">
                                    <svg className="w-full h-full" viewBox="0 0 24 24">
                                        <defs>
                                            <linearGradient id="arrow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor="#ee83a1" />
                                                <stop offset="50%" stopColor="#b66be8" />
                                                <stop offset="100%" stopColor="#7f65e4" />
                                            </linearGradient>
                                        </defs>
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth={2} 
                                            d="M17 8l4 4m0 0l-4 4m4-4H3" 
                                            stroke="url(#arrow-gradient)"
                                            fill="none"
                                        />
                                    </svg>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Roadmap;