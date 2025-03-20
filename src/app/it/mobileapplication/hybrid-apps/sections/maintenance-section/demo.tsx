"use client";

import { useState } from "react";
import { Store, BarChart2, TestTube, RefreshCw, Users } from "lucide-react";

const maintenanceFeatures = [
  { icon: Store, name: "Play Store Compliance" },
  { icon: BarChart2, name: "ASO (App Store Optimization)" },
  { icon: TestTube, name: "Beta Testing" },
  { icon: RefreshCw, name: "Regular Updates" },
  { icon: Users, name: "User Engagement" },
];

const maintenanceDetails = {
  "Play Store Compliance": [
    "Regular performance monitoring and optimization",
    "Security patches and updates",
    "User feedback implementation",
    "Policy compliance updates"
  ],
  // Add details for other features...
};

export function MaintenanceDemo() {
  const [selectedFeature, setSelectedFeature] = useState(maintenanceFeatures[0]);

  return (
    <div className="py-12">
      <h2 className="text-4xl font-bold text-center text-[#293478] mb-4">
        Maintenance Features
      </h2>
      <p className="text-center text-gray-600 mb-12">
        Ensuring your app thrives post-launch with our maintenance services.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Content */}
        <div className="flex items-center">
          <div>
            <h3 className="text-2xl font-bold text-[#293478] mb-4">
              {selectedFeature.name}
            </h3>
            <p className="text-gray-700 mb-4">
              Our dedicated team ensures your Android app stays up-to-date and performs optimally through:
            </p>
            <ul className="space-y-3">
              {maintenanceDetails[selectedFeature.name as keyof typeof maintenanceDetails]?.map((detail, index) => (
                <li key={index} className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                  </svg>
                  <span className="text-gray-700">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column - Feature Icons */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {maintenanceFeatures.map((feature, index) => (
            <button
              key={index}
              onClick={() => setSelectedFeature(feature)}
              className={`p-4 rounded-lg transition-all duration-300 group ${
                selectedFeature.name === feature.name
                  ? 'bg-blue-50 shadow-md'
                  : 'bg-white hover:bg-gray-50'
              }`}
            >
              <div className="flex flex-col items-center gap-2">
                <feature.icon 
                  className="w-8 h-8 text-[#293478] transition-all duration-300 transform group-hover:scale-110 group-hover:text-blue-600" 
                />
                <p className="text-sm font-medium text-gray-900 text-center group-hover:text-blue-600 transition-colors duration-300">
                  {feature.name}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}