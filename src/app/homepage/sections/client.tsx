"use client"

const ClientSection = () => {
    const clients = [
        "/images/client1.png",
        "/images/client1.png",
        "/images/client1.png",
        "/images/client1.png",
        "/images/client1.png",
        "/images/client1.png",
        "/images/client1.png",
        "/images/client1.png",
        "/images/client1.png",
        "/images/client1.png",
        "/images/client1.png",
        "/images/client1.png"
    ];

    return (
        <section className="py-20 mt-16">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#2B3674] mb-4">
                        14 years 2800+ clients
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg">
                        Working closely with the World Economic Forum and senior executives from 40 global companies, 
                        we have developed an end-to-end approach to transform your digital enterprise.
                    </p>
                </div>

                
            </div>
        </section>
    );
};

export default ClientSection;