import AnimatedContainer from '@/components/AnimatedContainer';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

const RealEstateCTA: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => {
    return (
        <AnimatedContainer visibleClass="!slide-in-from-top-0" className="container mt-64" {...props}>
            <div className={cn('flex items-center justify-center h-[21rem] lg:h-[45rem] relative rounded-4xl overflow-hidden px-4', className)}>
                <div className="-z-1 absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.13)_0%,rgba(0,0,0,0.40)_45.3%)]" />
                <Image fill sizes="auto" className="object-cover -z-2" src="/pages/real-estate/cta-background.jpg" alt="Real Estate CTA Background Image" />
                <div className="max-w-[16rem] lg:max-w-[38rem]">
                    <h1 className="title text-3xl lg:text-7xl">Begin Your Home Journey Today</h1>
                    <p className="text-lg text-white/72 max-w-[28rem] mt-6">Contact our expert team now to find your dream home and start your new chapter.</p>
                    <button className="button-regular mt-8">
                        Contact Us
                        <i className="pi pi-arrow-right text-sm"></i>
                    </button>
                </div>
            </div>
        </AnimatedContainer>
    );
};

export default RealEstateCTA;
