
import React from "react";
import SmallCards from "./small-cards";
import Hero from "./hero";
import Section2 from "./section2";
import Counter from "./counter";
import Roadmap from "./roadmap";
import FilterSection from "./filter-section/demo";


const ItServicesPage = () =>{
    return(
        <>
        <Hero/>
        <Section2/>
        <SmallCards/>
        <Counter/>
        <FilterSection/>
        <Roadmap/>
        </>
    );
}
export default ItServicesPage;