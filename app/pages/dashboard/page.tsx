
import RealEstateFooter from '@/components/pages/real-estate/Footer';
import AboutHero from '@/components/second-pages/about/Hero';
import Compare from '@/components/second-pages/pricing/Compare';
import React from 'react';

const RealEstatePage = () => {
    return (
        <section>
            <AboutHero />
            <Compare />
            <RealEstateFooter />
        </section>
    );
};

export default RealEstatePage;
