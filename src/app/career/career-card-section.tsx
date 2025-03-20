"use client"
import React from 'react';

const CareerCardSection = () => {
    const jobListings = [
        {
            title: "Software Engineer",
            location: "Remote",
            description: "Develop and maintain cutting-edge web applications.",
            salary: "$80,000 - $120,000",
            type: "Full-time",
            experience: "3-5 years",
            skills: ["React", "Node.js", "JavaScript"],
            designation: "Senior Developer"
        },
        {
            title: "Frontend Developer",
            location: "Hybrid",
            description: "Create responsive and interactive user interfaces.",
            salary: "$70,000 - $100,000",
            type: "Full-time",
            experience: "2-4 years",
            skills: ["React", "TypeScript", "Tailwind"],
            designation: "Mid-level Developer"
        },{
            title: "UX Designer",
            location: "New York, USA",
            description:
              "Design user-friendly interfaces and improve user experience.",
            salary: "$70,000 - $100,000",
            type: "Full-time",
            experience: "2-4 years",
            skills: ["Figma", "Adobe XD", "UI/UX"],
            designation: "Lead Designer",
          },
          {
            title: "Project Manager",
            location: "London, UK",
            description: "Manage projects and ensure timely delivery.",
            salary: "$90,000 - $130,000",
            type: "Full-time",
            experience: "5+ years",
            skills: ["Agile", "Scrum", "Team Management"],
            designation: "Senior Manager",
          },
          {
            title: "DevOps Engineer",
            location: "Remote",
            description:
              "Build and maintain CI/CD pipelines and cloud infrastructure.",
            salary: "$85,000 - $125,000",
            type: "Full-time",
            experience: "3-6 years",
            skills: ["AWS", "Docker", "Kubernetes"],
            designation: "DevOps Lead",
          },
          {
            title: "Mobile Developer",
            location: "San Francisco, USA",
            description: "Create innovative mobile applications for iOS and Android.",
            salary: "$95,000 - $140,000",
            type: "Full-time",
            experience: "4-7 years",
            skills: ["React Native", "iOS", "Android"],
            designation: "Senior Mobile Developer",
          },
    ];

    return (
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-200">
            <div className="flex flex-col  md:flex-row gap-8">
                {/* Left Column - col-md-3 */}
                <div className="w-full md:w-3/12 bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Filter Options</h3>
                    <div className="space-y-4">
                        <div className="p-4 bg-white rounded shadow">
                            Filter Content 1
                        </div>
                        <div className="p-4 bg-white rounded shadow">
                            Filter Content 2
                        </div>
                    </div>
                </div>

                {/* Right Column - col-md-9 */}
                <div className="w-full md:w-9/12 ">
                    <div className="grid grid-cols-1  sm:grid-cols-2 gap-6">
                        {jobListings.map((job, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:border-l-4 hover:border-[#b66be8]">
                                <div className="flex justify-between items-start mb-4">
                                    <h4 className="text-xl font-semibold text-gray-800">{job.title}</h4>
                                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                                        {job.type}
                                    </span>
                                </div>
                                <div className="space-y-3">
                                    <p className="text-gray-600">{job.description}</p>
                                    <div className="flex items-center text-gray-500 text-sm">
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        {job.location}
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {job.skills.map((skill, i) => (
                                            <span key={i} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-sm">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex justify-between items-center pt-4 border-t">
                                        <div className="text-gray-600">
                                            <p className="text-sm">{job.salary}</p>
                                            <p className="text-sm">{job.experience} experience</p>
                                        </div>
                                        <button className="px-4 py-2 text-white rounded-lg transition-all hover:shadow-lg bg-gradient-to-r from-[#ee83a1] via-[#b66be8] to-[#7f65e4]">
                                            Apply Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CareerCardSection;