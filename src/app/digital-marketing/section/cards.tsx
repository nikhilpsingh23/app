"use client"
import React from 'react';

const CardSection = () => {
    const columns = [
        {
            number: "01",
            title: "SEO",
            description: "On-Page & Off-Page",
            video: "/images/videos/dm1.mp4",
        },
        {
            number: "02",
            title: "Social Media Marketing",
            description: "Facebook Marketing, campaigns & optimisation. Linkedin promotion & lead generation",
            video: "/images/videos/dm3.mp4",
        },
        {
            number: "03",
            title: "Google AdWords",
            description: "Custom solutions tailored to your business needs",
            video: "/images/videos/dm3.mp4",
        },
        {
            number: "04",
            title: "Content Marketing",
            description: "2d-3d Videos, Blog Writting, Content Calendars, Creatives",
            video: "/images/videos/dm4.mp4",
        }
    ];

    return (
        <div className="w-full flex flex-col md:flex-row">
            {columns.map((column, index) => (
                <React.Fragment key={index}>
                    <div className="w-full md:w-1/4 relative group overflow-hidden h-[500px] md:h-[500px]">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        >
                            <source src={column.video} type="video/mp4" />
                        </video>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-[#ee99a4]/80 group-hover:via-[#b384d4]/80 group-hover:to-[#8e76ec]/80">
                            <div className="absolute bottom-0 left-0 p-4 md:p-8 w-full">
                                <span className="text-3xl md:text-4xl font-bold text-white mb-2 md:mb-4 block">
                                    {column.number}
                                </span>
                                <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 md:mb-3">
                                    {column.title}
                                </h3>
                                <p className="text-white/80 text-xs md:text-sm">
                                    {column.description}
                                </p>
                            </div>
                        </div>
                    </div>
                    {index < columns.length - 1 && (
                        <div className="hidden md:block h-[60%] w-[1px] bg-gradient-to-b from-transparent via-white/30 to-transparent" />
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

export default CardSection;