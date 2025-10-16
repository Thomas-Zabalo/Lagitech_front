import HomeBestProjects from '@/components/pages/home/BestProjects';
import HomeHero from '@/components/pages/home/Hero';
import HomeListings from '@/components/pages/home/Listings';
import HomePartner from '@/components/pages/home/Partner';
import React from 'react';
import ReversedHomeListings from '@/components/pages/home/ReverseListings';
import Footer from '@/components/Footer';

const HomePage = () => {
    return (
        <section>
            <HomeHero />
            <HomePartner />
            <HomeListings />
            <HomeBestProjects />
            <ReversedHomeListings />
            <Footer />
        </section>
    );
};

export default HomePage;
