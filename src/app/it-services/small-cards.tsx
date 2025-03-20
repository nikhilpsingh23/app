"use client"
import React from 'react';
import { FaDesktop, FaMobile, FaShoppingCart, FaPalette, FaBullseye } from 'react-icons/fa';

const SmallCards = () => {
    const services = [
        {
            icon: <FaDesktop className="w-8 h-8" />,
            title: "Dharma ERP",
            bgImage: "/images/it-services/card5.png"
        },
        {
            icon: <FaMobile className="w-8 h-8" />,
            title: "Mobile Application Development",
            bgImage: "/images/it-services/card1.png"
        },
        {
            icon: <FaShoppingCart className="w-8 h-8" />,
            title: "Ecommerce Website Development",
            bgImage: "/images/it-services/card2.png"
        },
        {
            icon: <FaPalette className="w-8 h-8" />,
            title: "Website Designing & Development",
            bgImage: "/images/it-services/card3.png"
        },
        {
            icon: <FaBullseye className="w-8 h-8" />,
            title: "Digital Marketing Services",
            bgImage: "/images/it-services/card4.png"
        }
    ];

    return (
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1200px] mt-12px mx-auto py-12">
                <h2 className="text-3xl font-semibold mb-4 text-center mt-15px">What We Serve</h2>
                <div className="flex justify-center space-x-2 mb-4">
                    <div className="w-2 h-1 bg-gradient-to-r from-[#ee83a1] via-[#b66be8] to-[#7f65e4]"></div>
                        <div className="w-2 h-1 bg-gradient-to-r from-[#ee83a1] via-[#b66be8] to-[#7f65e4]"></div>
                        <div className="w-12 h-1 bg-gradient-to-r from-[#ee83a1] via-[#b66be8] to-[#7f65e4]"></div>
                    </div>
                <div className="flex flex-col md:flex-row gap-4">
                    {services.map((service, index) => (
                        <div 
                            key={index} 
                            className="relative w-full md:w-1/5 h-[300px] rounded-lg overflow-hidden group cursor-pointer"
                            style={{
                                backgroundImage: `url(${service.bgImage})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}
                        >
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-purple-900/80 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />
                            
                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 transform group-hover:-translate-y-2 transition-transform duration-300">
                                <div className="text-white mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                    {service.icon}
                                </div>
                                <h3 className="text-white text-center text-lg font-semibold transform group-hover:scale-105 transition-transform duration-300">
                                    {service.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SmallCards;