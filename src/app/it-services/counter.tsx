"use client"
import React, { useState, useEffect, useRef } from 'react';
import { FaUsers, FaGlobe, FaUserClock, FaHandshake } from 'react-icons/fa';

const Counter = () => {
    const [counts, setCounts] = useState({
        projects: 0,
        years: 0,
        countries: 0,
        satisfaction: 0
    });
    const [hasAnimated, setHasAnimated] = useState(false);
    const sectionRef = useRef(null);

    const startCounting = () => {
        if (hasAnimated) return;
        
        const duration = 2000;
        const steps = 50;
        const interval = duration / steps;
        const targets = {
            projects: 1500,
            years: 15,
            countries: 10,
            satisfaction: 100
        };

        let currentStep = 0;

        const timer = setInterval(() => {
            if (currentStep === steps) {
                clearInterval(timer);
                setCounts(targets);
                setHasAnimated(true);
                return;
            }

            setCounts(prev => ({
                projects: Math.min(Math.round((targets.projects / steps) * currentStep), targets.projects),
                years: Math.min(Math.round((targets.years / steps) * currentStep), targets.years),
                countries: Math.min(Math.round((targets.countries / steps) * currentStep), targets.countries),
                satisfaction: Math.min(Math.round((targets.satisfaction / steps) * currentStep), targets.satisfaction)
            }));

            currentStep++;
        }, interval);

        return () => clearInterval(timer);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    startCounting();
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [hasAnimated]);

    return (
        <div ref={sectionRef} className="w-full bg-gray-50 py-16 md:py-24">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Let the numbers speak!</h2>
                    <p className="text-gray-600">With enough data, the numbers speak for themselves.</p>
                    
                    <div className="flex justify-center space-x-2 mt-4">
                    <div className="w-2 h-1 bg-gradient-to-r from-[#ee83a1] via-[#b66be8] to-[#7f65e4]"></div>
                        <div className="w-2 h-1 bg-gradient-to-r from-[#ee83a1] via-[#b66be8] to-[#7f65e4]"></div>
                        <div className="w-12 h-1 bg-gradient-to-r from-[#ee83a1] via-[#b66be8] to-[#7f65e4]"></div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-white p-8 rounded-lg shadow-sm text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                        <FaUsers className="w-8 h-8 text-blue-800 mx-auto mb-4 animate-bounce" />
                        <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#ee83a1] via-[#b66be8] to-[#7f65e4] text-transparent bg-clip-text">{counts.projects}+</div>
                        <p className="text-gray-600">Projects Completed Successfully</p>
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow-sm text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                        <FaUserClock className="w-8 h-8 text-blue-800 mx-auto mb-4 animate-pulse" />
                        <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#ee83a1] via-[#b66be8] to-[#7f65e4] text-transparent bg-clip-text">{counts.years}+</div>
                        <p className="text-gray-600">Years of Experience</p>
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow-sm text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                        <FaGlobe className="w-8 h-8 text-blue-800 mx-auto mb-4 animate-spin-slow" />
                        <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#ee83a1] via-[#b66be8] to-[#7f65e4] text-transparent bg-clip-text">{counts.countries}+</div>
                        <p className="text-gray-600">Countries We Have Worked With.</p>
                    </div>

                    <div className="bg-white p-8 rounded-lg shadow-sm text-center transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                        <FaHandshake className="w-8 h-8 text-blue-800 mx-auto mb-4 animate-pulse" />
                        <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#ee83a1] via-[#b66be8] to-[#7f65e4] text-transparent bg-clip-text">{counts.satisfaction}%</div>
                        <p className="text-gray-600">Satisfaction of our customers</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Counter;