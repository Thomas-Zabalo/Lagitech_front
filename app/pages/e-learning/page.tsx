import Footer from '@/components/Footer';
import ELearningCTA from '@/components/pages/e-learning/CTA';
import ELearningFAQ from '@/components/pages/e-learning/FAQ';
import { ELearningFeatures } from '@/components/pages/e-learning/Features';
import ELearningHero from '@/components/pages/e-learning/Hero';
import ELearningNavigating from '@/components/pages/e-learning/Navigating';
import ELearningNetwork from '@/components/pages/e-learning/Network';
import ELearningPodcasts from '@/components/pages/e-learning/Podcasts';
import ELearningTeachers from '@/components/pages/e-learning/Teachers';
import ELearningTestimonials from '@/components/pages/e-learning/Testimonials';
import ELearningVideoLecture from '@/components/pages/e-learning/VideoLecture';
import React from 'react';

const ELearningPage = () => {
    return (
        <section>
            <ELearningHero />
            <ELearningFeatures />
            <ELearningNetwork />
            <ELearningVideoLecture />
            <ELearningTeachers />
            <ELearningCTA />
            <ELearningTestimonials />
            <ELearningPodcasts />
            <ELearningNavigating />
            <ELearningFAQ />
            <Footer className="mt-24 lg:mt-64" />
        </section>
    );
};

export default ELearningPage;
