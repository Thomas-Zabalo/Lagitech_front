import React from 'react';
import BubbleMessageIcon from '@/components/icons/bubble-message.svg';
import TestimonialsWithButton from '@/components/TestimonialsWithButton';
const ELearningTestimonials = () => {
    return (
        <div className="container mt-24 lg:mt-64">
            <div className="icon-box">
                <BubbleMessageIcon />
            </div>
            <h1 className="mt-10 text-3xl lg:text-5xl font-semibold text-surface-950 dark:text-surface-0  max-w-lg leading-tight text-center mx-auto">Real Stories Real Results Our Customers</h1>
            <p className="mt-6 text-lg text-surface-500 dark:text-white/64 max-w-lg mx-auto text-center">Discover how our solutions have transformed businesses through authentic testimonials from our valued customers.</p>
            <TestimonialsWithButton className="mt-16" />
        </div>
    );
};

export default ELearningTestimonials;
