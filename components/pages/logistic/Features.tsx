import AnimatedContainer from '@/components/AnimatedContainer';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const logisticFeaturesData = [
    {
        badge: 'Business',
        title: 'Optimize Your Supply Chain with Confidence',
        image: '/pages/logistic/feature-business.jpg',
        description: 'Utilize our advanced logistics solutions to streamline your supply chain and enhance efficiency.',
        details: ['Real-Time Tracking', 'Automated Inventory Management', 'Secure Freight Services']
    },
    {
        badge: 'Optimize',
        title: 'Enhance Your Logistics Operations',
        image: '/pages/logistic/feature-optimize.jpg',
        description: 'Boost your logistics performance with our cutting-edge tools designed for optimal efficiency.',
        details: ['Route Optimization', 'Integrated Communication Systems', 'Real-Time Data Analytics']
    }
];

const LogisticFeatures: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => {
    return (
        <div className={cn('container max-w-[73rem] flex flex-col gap-24 lg:gap-60 mt-60', className)} {...props}>
            {logisticFeaturesData.map((item, index) => (
                <AnimatedContainer key={index} className="flex md:flex-row flex-col-reverse even:flex-col-reverse md:even:flex-row-reverse items-center justify-between gap-16 lg:gap-20">
                    <div className="flex-1">
                        <div className="badge">{item.badge}</div>
                        <h3 className="text-3xl lg:text-5xl text-surface-950 dark:text-surface-0 font-semibold leading-tight mt-4">{item.title}</h3>
                        <p className="text-lg lg:text-xl text-surface-500 dark:text-white/64 mt-6">{item.description}</p>
                        <ul className="flex flex-col gap-3.5 mt-8">
                            {item.details.map((detailItem, j) => (
                                <li key={'detail-' + j} className="flex items-center gap-3 text-surface-500 dark:text-white/64 text-lg lg:text-xl">
                                    <i className="pi pi-check-circle text-base"></i>
                                    {detailItem}
                                </li>
                            ))}
                        </ul>
                        <Link href={''} className="button-gradient mt-8">
                            Get Started
                        </Link>
                    </div>
                    <div className="w-full md:flex-1 h-[31rem] relative rounded-4xl overflow-hidden shadow-blue-card">
                        <div className="absolute inset-0 -z-1 bg-[linear-gradient(0deg,rgba(0,0,0,0.20)_0%,rgba(0,0,0,0.20)_100%)]" />
                        <Image fill sizes="auto" className="object-cover -z-2" src={item.image} alt="Logistic Feautre Image" />
                    </div>
                </AnimatedContainer>
            ))}
        </div>
    );
};

export default LogisticFeatures;
