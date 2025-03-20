import { ProjectCard } from './project-card';

const projects = [
  {
    title: 'E-Commerce Mobile App',
    description: 'A full-featured shopping app with real-time inventory and secure payments',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Stripe']
  },
  {
    title: 'Health & Fitness Tracker',
    description: 'iOS app for tracking workouts, nutrition, and health metrics',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    technologies: ['Swift', 'HealthKit', 'CoreML', 'CloudKit']
  },
  {
    title: 'Smart Home Controller',
    description: 'IoT control center app for managing smart home devices',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    technologies: ['Kotlin', 'MQTT', 'Realm', 'Bluetooth LE']
  },
  {
    title: 'Food Delivery Platform',
    description: 'Cross-platform delivery app with real-time tracking',
    image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
    technologies: ['Flutter', 'Firebase', 'Google Maps', 'Stripe']
  }
];

export function ProjectDemo() {
  return (
    <div className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-[#293478] mb-4">Recent Projects</h2>
        <p className="text-gray-600 text-lg">
          Showcasing our latest mobile application developments
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}