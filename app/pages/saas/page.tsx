import FooterWithCTA from '@/components/FooterWithCTA';
import SaasFeatures from '@/components/pages/saas/Features';
import SaasHero from '@/components/pages/saas/Hero';
import SaasStreamline from '@/components/pages/saas/Streamline';
import SaasTrends from '@/components/pages/saas/Trends';
import FAQ from '@/components/second-pages/FAQ';
import PricingTestimonials from '@/components/second-pages/pricing/Testimonials';
import React from 'react';

const SaasPage = () => {
    return (
        <section>
            <SaasHero />
            <SaasFeatures />
            <SaasStreamline />
            <PricingTestimonials />
            <SaasTrends />
            <FAQ className="mt-24 lg:mt-64" />
            <FooterWithCTA className="mt-24 lg:mt-64" />
        </section>
    );
};

export default SaasPage;
