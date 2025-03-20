"use client"
import React from 'react';
import Image from 'next/image';

const ScrollCard = () => {
    const sections = [
        {
            id: 1,
            title: "We imagine.",
            description: "Dedicated software engineering teams that include technical rising stars customer expectations and accelerate your growth.",
            bgImage: "/images/home/bg.png",
            cards: [
                {
                    title: "Digital Business",
                    description: "Enhancing Performance Through Digital Transformation"
                },
                {
                    title: "Digital Commerce",
                    description: "Building Seamless B2B2X and B2C Digital Trade"
                },
                {
                    title: "Enterprise Management",
                    description: "Accelerating Growth Through Development"
                }
            ]
        },
        {
            id: 2,
            title: "We engineer.",
            description: "Streamline your software engineering to drive greater efficiency and create resilience across your products and platforms.",
            bgImage: "/images/bg-engineer.jpg",
            cards: [
                {
                    title: "Technical Excellence",
                    description: "Building Core Competencies"
                },
                {
                    title: "Cloud Solutions",
                    description: "Modernizing Infrastructure"
                },
                {
                    title: "Advanced Analytics",
                    description: "Data-Driven Decision Making"
                }
            ]
        },
        {
            id: 3,
            title: "We modernize.",
            description: "Discover new opportunities for innovation and growth by bringing your legacy systems up to speed.",
            bgImage: "/images/bg-modernize.jpg",
            cards: [
                {
                    title: "Legacy Transformation",
                    description: "Modernizing Core Systems"
                },
                {
                    title: "Cloud Migration",
                    description: "Seamless Transition to Cloud"
                },
                {
                    title: "Digital Integration",
                    description: "Connected Enterprise Systems"
                }
            ]
        },
        {
            id: 4,
            title: "We manage.",
            description: "Transform and optimize the heartbeat of your operations, process and development to reduce costs and increase growth.",
            bgImage: "/images/bg-manage.jpg",
            cards: [
                {
                    title: "Process Optimization",
                    description: "Streamlined Operations"
                },
                {
                    title: "DevOps Excellence",
                    description: "Continuous Improvement"
                },
                {
                    title: "Managed Services",
                    description: "End-to-End Support"
                }
            ]
        }
    ];

    return (
        <div className="w-full">
            {sections.map((section) => (
                <div 
                    key={section.id}
                    className="relative min-h-screen w-full flex items-center"
                >
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src={section.bgImage}
                            alt={section.title}
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-black/50"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                            {section.title}
                        </h2>
                        <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-12">
                            {section.description}
                        </p>

                        {/* Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {section.cards.map((card, index) => (
                                <div 
                                    key={index}
                                    className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
                                >
                                    <h3 className="text-xl font-semibold text-white mb-3">
                                        {card.title}
                                    </h3>
                                    <p className="text-white/70">
                                        {card.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ScrollCard;