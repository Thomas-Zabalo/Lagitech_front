import RealEstateBestProjects from '@/components/pages/home/BestProjects';
import RealEstateFooter from '@/components/pages/home/Footer';
import RealEstateHero from '@/components/pages/home/Hero';
import RealEstateListings from '@/components/pages/home/Listings';
import RealEstatePartner from '@/components/pages/home/Partner';
import React from 'react';

const DashboardPage = () => {
    return (
        <section>
            <RealEstateHero />
            <RealEstatePartner />
            <RealEstateListings />
            <RealEstateBestProjects />
            <RealEstateFooter />
        </section>
    );
};

export default DashboardPage;
