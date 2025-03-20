import React from 'react';
import { TimelineDemo } from './sections/timeline-section/demo';
import { IconCloudWrapper } from './sections/technology-section/icon-cloud-wrapper';
import { MaintenanceDemo } from './sections/maintenance-section/demo';
import { ProjectDemo } from './sections/project-section/demo';
import { FeatureSteps } from './sections/hero-card/feature-section';
import { FeaturesSectionWithHoverEffects } from './sections/method-section/method-section';

const features = [
  {
    step: "Step 1",
    title: "Initial Consultation",
    content: "We discuss your app idea, requirements, and business goals",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
  },
  {
    step: "Step 2",
    title: "Design & Planning",
    content: "Creating wireframes, UI/UX design, and technical architecture",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
  },
  {
    step: "Step 3",
    title: "Development",
    content: "Building your app with the latest Android technologies",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
  },
  
];
const IOSAppsPage = () => {
  return (
    <div className="min-h-screen">
    <div className="container mx-auto px-4 py-16">
      <h1 className="py-10 text-center text-4xl font-bold bg-gradient-to-r from-[#47bfe6] via-[#4747c1] to-[#10187e] bg-clip-text text-transparent mb-8">
        Ios App Development
      </h1>
      <div className="flex flex-col gap-10">
          <section>
            <FeatureSteps 
              features={features}
              autoPlayInterval={4000}
            />
          </section>
          { /* <section className="w-full">
            <CardSectionDemo />
          </section> */}
          <section className="w-full">
            <IconCloudWrapper />
          </section>
          <section>
            <FeaturesSectionWithHoverEffects/>
          </section>
          <section className='w-full'>
            <MaintenanceDemo/>
          </section>
          
          

          <section className='w-full'>
            <ProjectDemo/>
          </section>
          
          <section className="w-full relative">
            <TimelineDemo />
          </section>
        </div>
    </div>
    </div>
  );
};

export default IOSAppsPage;