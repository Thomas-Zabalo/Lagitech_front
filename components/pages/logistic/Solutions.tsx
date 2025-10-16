import AnimatedContainer from '@/components/AnimatedContainer';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const solutionsData = [
    {
        title: 'Supply Chain Optimization',
        description: 'Learn strategies to streamline your supply chain and improve efficiency.',
        image: '/pages/logistic/solution-1-image.jpg'
    },
    {
        title: 'Yellow Logistics',
        description: 'Discover eco-friendly practices to make your logistics operations sustainable.',
        image: '/pages/logistic/solution-2-image.jpg'
    },
    {
        title: 'Future of Logistics Tech',
        description: 'Explore the latest technological advancements transforming the logistics industry.',
        image: '/pages/logistic/solution-3-image.jpg'
    }
];

const LogisticSolutions: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => {
    return (
        <div className={cn('container mt-64', className)} {...props}>
            <div className="max-w-[40rem] mx-auto">
                <h1 className="text-3xl lg:text-7xl font-semibold text-surface-950 dark:text-surface-0">Sustainable Logistics Solutions</h1>
                <p className="text-xl text-surface-500 dark:text-white/64 mt-6">Explore the latest trends and advancements in logistics with expert insights and practical tips.</p>
                <Link href={''} className="button-gradient mt-6">
                    All Blogs
                    <i className="pi pi-arrow-right text-sm"></i>
                </Link>
            </div>
            <div className="mt-24 grid grid-cols-1 lg:grid-cols-3 gap-px rounded-4xl overflow-hidden">
                {solutionsData.map((item, index) => (
                    <AnimatedContainer key={index} delay={index * 200} className="relative h-[34rem] group">
                        <div className="absolute inset-0 -z-1 bg-[linear-gradient(180deg,rgba(0,0,0,0.00)_0%,rgba(0,0,0,0.40)_64.82%)] group-hover:bg-[rgba(37,99,235,0.10)] transition-all" />
                        <Image className="select-none object-cover -z-2 group-hover:grayscale transition-all" fill sizes="auto" src={item.image} alt="Logistic Solutions Image" />
                        <div className="absolute left-8 right-8 bottom-8 flex flex-col gap-3">
                            <div className="flex items-center justify-between">
                                <span className="text-4xl text-white/72 font-semibold">{String(index + 1).padStart(2, '0')}</span>
                                <Link href={''} className="group-hover:opacity-100 opacity-0 button-regular h-8 min-w-0 px-4">
                                    <i className="pi pi-arrow-right bg-main-gradient bg-clip-text [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]"></i>
                                </Link>
                            </div>
                            <h5 className="text-2xl title">{item.title}</h5>
                            <p className="text-white/72 text-lg">{item.description}</p>
                        </div>
                    </AnimatedContainer>
                ))}
            </div>
        </div>
    );
};

export default LogisticSolutions;
