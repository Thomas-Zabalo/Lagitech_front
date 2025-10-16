import FooterWithCTA from '@/components/FooterWithCTA';
import AgencyBlog from '@/components/pages/agency/Blog';
import AgencyFAQ from '@/components/pages/agency/FAQ';
import AgencyHero from '@/components/pages/agency/Hero';
import AgencyProjects from '@/components/pages/agency/Projects';
import AgencySolutions from '@/components/pages/agency/Solutions';
import AgencyTestimonials from '@/components/pages/agency/Testimonials';
import React from 'react';

const AgencyPage = () => {
    return (
        <section>
            <AgencyHero />
            <AgencySolutions />
            <AgencyProjects />
            <AgencyTestimonials />
            <AgencyBlog />
            <AgencyFAQ />
            <FooterWithCTA className="mt-24 lg:mt-64" />
        </section>
    );
};

export default AgencyPage;
