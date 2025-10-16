import AnimatedContainer from '@/components/AnimatedContainer';
import TestimonialsWithButton from '@/components/TestimonialsWithButton';
import React from 'react';

const AgencyTestimonials = () => {
    return (
        <AnimatedContainer className="mt-24 lg:mt-64 container">
            <span className="text-xl font-semibold text-surface-950 dark:text-surface-0">Testimonial</span>
            <h1 className="mt-2 text-3xl lg:text-6xl font-semibold text-surface-950 dark:text-surface-0 max-w-2xl leading-tight">Real Stories Real Results Our Customers</h1>
            <TestimonialsWithButton className="mt-16" />
        </AnimatedContainer>
    );
};

export default AgencyTestimonials;
