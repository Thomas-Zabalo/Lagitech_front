import Footer from '@/components/Footer';
import AboutHero from '@/components/pages/dashboard/Hero';
import Compare from '@/components/pages/dashboard/Compare';

import React from 'react';

const DashboardPage = () => {
    return (
        <section>
            <AboutHero />
            <Compare />
            <Footer />
        </section>
    );
};

export default DashboardPage;
