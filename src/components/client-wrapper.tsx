"use client"
import dynamic from 'next/dynamic';

const MobileCaraousel = dynamic(() => import("@/app/homepage/sections/mobileCaraouse/page"), { ssr: false });
const FeatureCards = dynamic(() => import("@/app/homepage/sections/cardSection"), { ssr: false });
const Overlay = dynamic(() => import("@/app/homepage/sections/overlay"), { ssr: false });
const ClientSection = dynamic(() => import("@/app/homepage/sections/client"), { ssr: false });
const ScrollCard = dynamic(() => import("@/app/homepage/sections/scroll-card"), { ssr: false });

export default function ClientWrapper() {
  return (
    <>
      <ScrollCard />
      <FeatureCards />
      <MobileCaraousel />
      <Overlay />
      <ClientSection />
    </>
  );
}