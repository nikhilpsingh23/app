import React from 'react';
import HeroSection from './section/hero-section/demo';
import FilterSection from './section/filter-section/demo';
import StickyCarousel from './section/caraousel/demo';
import VideoBanner from './section/videobanner/demo';
import SpecialSection from './section/special/demo';
import CardSection from './section/cards';

const DigitalMarketingPage = () => {
  return (
    <>
      <HeroSection/>
      <SpecialSection/>
      <CardSection/>
      <FilterSection/>
      <VideoBanner/>
    </>
  );
};

export default DigitalMarketingPage;