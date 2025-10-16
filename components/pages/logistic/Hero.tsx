'use client';
import AnimatedContainer from '@/components/AnimatedContainer';
import FloatingCustomers from '@/components/FloatingCustomers';
import Navbar from '@/components/Navbar';
import { useTheme } from '@/context/ThemeContext';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
const LogisticHero: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => {
    const { heroContainerType } = useTheme();
    const isWide = heroContainerType === 'wide';
    return (
        <AnimatedContainer visibleClass="!slide-in-from-top-0" className={`${isWide ? 'h-[50rem] lg:h-[44rem] relative' : 'pt-6'}`}>
            {isWide ? (
                <>
                    <Image className="w-full h-full object-cover absolute inset-0 -z-2" src="/pages/logistic/hero-background.jpg" alt="Logistic Hero Background Image" fill sizes="auto" loading="eager" />
                    <div className="absolute inset-0 -z-1 bg-[linear-gradient(106deg,rgba(0,0,0,0.36)_0.48%,rgba(0,0,0,0.10)_100%)]" />
                </>
            ) : null}
            <div className="container">
                <div className={cn('h-[50rem] lg:h-[44rem] relative overflow-hidden rounded-3xl lg:rounded-4xl shadow-black-card flex flex-col', className)} {...props}>
                    {isWide ? null : (
                        <>
                            <Image className="w-full h-full object-cover absolute inset-0 -z-2" src="/pages/logistic/hero-background.jpg" alt="Logistic Hero Background Image" fill sizes="auto" loading="eager" />
                            <div className="absolute inset-0 -z-1 bg-[linear-gradient(106deg,rgba(0,0,0,0.36)_0.48%,rgba(0,0,0,0.10)_100%)]" />
                        </>
                    )}

                    <Navbar />
                    <div className="flex-1 flex flex-col justify-between pb-16">
                        <div className="mt-10 lg:mt-20 lg:ml-20 px-6 lg:px-0">
                            <h1 className="title text-4xl lg:text-7xl max-w-2xl !leading-tight">Streamline Your Logistics Operations</h1>
                            <p className="mt-6 description max-w-[40rem] text-white/72 lg:text-base text-lg">Optimize your supply chain with our cutting-edge logistics solutions, ensuring timely and efficient delivery of your goods worldwide.</p>
                            <div className="mt-8 flex items-center gap-3">
                                <Link href={''} className="button-regular">
                                    Get Started
                                </Link>
                                <Link href={''} className="button-outlined">
                                    Explore
                                </Link>
                            </div>
                        </div>
                        <FloatingCustomers className="mt-auto mb-0" />
                    </div>
                </div>
            </div>
        </AnimatedContainer>
    );
};

export default LogisticHero;
