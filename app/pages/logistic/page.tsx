import LogisticFAQ from '@/components/pages/logistic/FAQ';
import LogisticFeatures from '@/components/pages/logistic/Features';
import LogisticFooter from '@/components/pages/logistic/Footer';
import LogisticHero from '@/components/pages/logistic/Hero';
import LogisticServices from '@/components/pages/logistic/Services';
import LogisticSolutions from '@/components/pages/logistic/Solutions';
import LogisticStreamline from '@/components/pages/logistic/Streamline';
import LogisticTeam from '@/components/pages/logistic/Team';
import LogisticTestimonials from '@/components/pages/logistic/Testimonials';
import LogisticWhoWeAre from '@/components/pages/logistic/WhoWeAre';
import React from 'react';

const LogisticPage = () => {
    return (
        <section>
            <LogisticHero />
            <LogisticWhoWeAre />
            <LogisticFeatures />
            <LogisticServices />
            <LogisticStreamline />
            <LogisticTestimonials />
            <LogisticTeam />
            <LogisticSolutions />
            <LogisticFAQ />
            <LogisticFooter />
        </section>
    );
};

export default LogisticPage;
