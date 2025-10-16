import RealEstateBestProjects from '@/components/pages/real-estate/BestProjects';
import RealEstateBestProjectsSecond from '@/components/pages/real-estate/BestProjectsSecond';
import RealEstateCTA from '@/components/pages/real-estate/CTA';
import RealEstateFooter from '@/components/pages/real-estate/Footer';
import RealEstateHero from '@/components/pages/real-estate/Hero';
import RealEstateListings from '@/components/pages/real-estate/Listings';
import RealEstatePartner from '@/components/pages/real-estate/Partner';
import RealEstateTestimonials from '@/components/pages/real-estate/Testimonials';
import RealEstateWorkflow from '@/components/pages/real-estate/Workflow';
import React from 'react';

const RealEstatePage = () => {
    return (
        <section>
            <RealEstateHero />
            <RealEstatePartner />
            <RealEstateListings />
            <RealEstateBestProjects />
            <RealEstateWorkflow />
            <RealEstateTestimonials />
            <RealEstateCTA />
            <RealEstateBestProjectsSecond />
            <RealEstateFooter />
        </section>
    );
};

export default RealEstatePage;
