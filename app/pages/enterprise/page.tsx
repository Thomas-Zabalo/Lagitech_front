import FooterWithCTA from '@/components/FooterWithCTA';
import EnterpriseFeatures from '@/components/pages/enterprise/Features';
import EnterpriseGrowth from '@/components/pages/enterprise/Growth';
import EnterpriseHero from '@/components/pages/enterprise/Hero';
import EnterpriseInteraction from '@/components/pages/enterprise/Interaction';
import EnterpriseSolutions from '@/components/pages/enterprise/Solutions';
import EnterpriseTestimonials from '@/components/pages/enterprise/Testimonials';
import EnterpriseTimelapse from '@/components/pages/enterprise/Timelapse';
import React from 'react';

const EnterprisePage = () => {
    return (
        <section>
            <EnterpriseHero />
            <EnterpriseFeatures />
            <EnterpriseSolutions />
            <EnterpriseTimelapse />
            <EnterpriseGrowth />
            <EnterpriseTestimonials />
            <EnterpriseInteraction />
            <FooterWithCTA className="mt-24 lg:mt-64" />
        </section>
    );
};

export default EnterprisePage;
