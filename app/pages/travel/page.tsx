import TravelCTA from '@/components/pages/travel/CTA';
import TravelDestinationGallery from '@/components/pages/travel/DestinationGallery';
import TravelDestinationGrid from '@/components/pages/travel/DestinationGrid';
import TravelDestinationPlan from '@/components/pages/travel/DestinationPlan';
import TravelEscapeGallery from '@/components/pages/travel/EscapeGallery';
import TravelFooter from '@/components/pages/travel/Footer';
import TravelGuides from '@/components/pages/travel/Guides';
import TravelHero from '@/components/pages/travel/Hero';
import React from 'react';

const TravelPage = () => {
    return (
        <section>
            <TravelHero />
            <TravelDestinationGallery />
            <TravelEscapeGallery />
            <TravelDestinationGrid />
            <TravelDestinationPlan />
            <TravelGuides />
            <TravelCTA />
            <TravelFooter />
        </section>
    );
};

export default TravelPage;
