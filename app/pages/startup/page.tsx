import FooterWithCTA from '@/components/FooterWithCTA';
import StartupAnalytics from '@/components/pages/startup/Analytics';
import StartupContact from '@/components/pages/startup/Contact';
import StartupFAQ from '@/components/pages/startup/FAQ';
import StartupFeatures from '@/components/pages/startup/Features';
import StartupHero from '@/components/pages/startup/Hero';
import StartupTeam from '@/components/pages/startup/Team';
import StartupTestimonials from '@/components/pages/startup/Testimonials';
import React from 'react';

const StartupPage = () => {
    return (
        <section>
            <StartupHero />
            <StartupAnalytics />
            <StartupFeatures />
            <StartupTestimonials />
            <StartupContact />
            <StartupTeam />
            <StartupFAQ />
            <FooterWithCTA className="mt-24 lg:mt-64" />
        </section>
    );
};

export default StartupPage;
