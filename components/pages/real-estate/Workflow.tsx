import AnimatedContainer from '@/components/AnimatedContainer';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

const realEstateWorkflowData = [
    {
        title: 'Define the Problem',
        description: 'Learn about the culture, climate, and attractions through guides, forums, and blogs.'
    },
    {
        title: 'Develop the Solution',
        description: 'Once the problem is defined, our team creates a detailed plan and design, presenting innovative solutions.'
    },
    {
        title: 'Concept Revision',
        description: 'After the initial design, we review the concept with the client, making necessary adjustments to meet their expectations.'
    },
    {
        title: 'Finalize and Build',
        description: 'Upon approval, we proceed to finalize the design and begin the construction process, ensuring every detail is executed perfectly.'
    }
];

const RealEstateWorkflow: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => {
    return (
        <div className={cn('container flex lg:flex-row flex-col gap-18 mt-24 lg:mt-64', className)} {...props}>
            <AnimatedContainer visibleClass="!slide-in-from-top-0 slide-in-from-left-24" className="w-full lg:flex-1 h-[30rem] lg:h-[49rem] rounded-4xl overflow-hidden shadow-blue-card relative">
                <div className="absolute -z-1 inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.12)_0%,rgba(0,0,0,0.12)_100%)]" />
                <Image fill sizes="auto" className="object-cover -z-2" src="/pages/real-estate/workflow-image.jpg" alt="Real Estate Workflow Image" />
            </AnimatedContainer>
            <div className="flex-1">
                <span className="badge">Construction</span>
                <h1 className="text-3xl lg:text-5xl mt-4 font-semibold text-surface-950 dark:text-surface-0">Our Project Workflow</h1>
                <p className="text-lg text-surface-500 dark:text-white/64 mt-5">
                    Our streamlined project workflow ensures that every detail is meticulously planned and executed, from initial concept to final construction. Here’s how we turn your vision into reality
                </p>
                <ul className="flex flex-col gap-8 mt-14">
                    {realEstateWorkflowData.map((item, index) => (
                        <AnimatedContainer key={index} delay={index * 200}>
                            <li className="flex flex-col gap-4">
                                <h6 className="text-2xl font-medium text-surface-950 dark:text-surface-0">{item.title}</h6>
                                <p className="text-lg text-surface-500 dark:text-white/64">{item.description}</p>
                            </li>
                        </AnimatedContainer>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default RealEstateWorkflow;
