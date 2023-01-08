import React from 'react';
import ClampingoSection from '../components/Sections/ClampingoSection';
import HeroSection from '../components/Sections/HeroSection';
import OfferSection from '../components/Sections/OfferSection';
import ResourcesSection from '../components/Sections/ResourcesSection';
import TrialSection from '../components/Sections/TrialSection';
import WorksSection from '../components/Sections/WorksSection';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <TrialSection></TrialSection>
            <OfferSection></OfferSection>
            <WorksSection></WorksSection>
            <ClampingoSection></ClampingoSection>
            <ResourcesSection></ResourcesSection>
        </div>
    );
};

export default Home;