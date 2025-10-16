import AnimatedContainer from '@/components/AnimatedContainer';
import { Accordion, AccordionItem } from '@/components/ui/accordion';
import React from 'react';

const AgencyFAQ = () => {
    return (
        <div className="container mt-24 lg:mt-64">
            <span className="text-xl font-semibold text-surface-950 dark:text-surface-0">FAQ</span>
            <h1 className="mt-2 text-3xl lg:text-6xl font-semibold text-surface-950 dark:text-surface-0">Navigating the Future of Creativity</h1>
            <Accordion className="mt-16 gap-8">
                {agencyFAQData.map((item, index) => (
                    <AnimatedContainer key={index} delay={100 * index}>
                        <AccordionItem className="!shadow-none !border-none rounded-none border-b border-surface-200 dark:border-surface-700 last:border-none px-0" {...item} />
                    </AnimatedContainer>
                ))}
            </Accordion>
        </div>
    );
};

export default AgencyFAQ;

const agencyFAQData = [
    {
        title: 'What services does your agency offer?',
        content: 'We offer a range of services including brand strategy, web design and development, mobile app creation, digital marketing, and creative content production.'
    },
    {
        title: 'How do you approach a new project?',
        content:
            'We start every project with an in-depth consultation to understand your goals, target audience, and brand vision. Then, we develop a customized plan that aligns with your objectives, ensuring each step is tailored to your specific needs.'
    },
    {
        title: 'What is your typical project timeline?',
        content: 'The timeline depends on the scope of the project. On average, web development projects take 6-8 weeks, while mobile apps can take 3-6 months. We provide detailed timelines after reviewing the project requirements.'
    },
    {
        title: 'Can you work with clients from different industries?',
        content: 'Absolutely! We have experience working with clients across various industries, including healthcare, e-commerce, education, finance, and more. Our approach is adaptable to meet the unique needs of each sector.'
    }
];
