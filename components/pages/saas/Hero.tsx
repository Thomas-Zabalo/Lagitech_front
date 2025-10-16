'use client';
import AnimatedContainer from '@/components/AnimatedContainer';
import CirclePattern from '@/components/CirclePattern';
import Navbar from '@/components/Navbar';
import StaticCustomers from '@/components/StaticCustomers';
import { useTheme } from '@/context/ThemeContext';
import Image from 'next/image';
import React from 'react';

const SaasHero = () => {
    const { resolvedTheme, heroContainerType } = useTheme();
    const isWide = heroContainerType === 'wide';
    return (
        <AnimatedContainer visibleClass="!slide-in-from-top-0" className={`relative ${isWide ? '' : 'mt-6'}`}>
            {isWide && <div className="absolute top-0 inset-x-0 h-[42rem] lg:h-[51rem] shadow-black-card bg-main-gradient"></div>}
            <div className="container relative">
                <div className={`absolute top-0 left-4 right-4 h-[42rem] lg:h-[51rem] ${isWide ? '' : 'shadow-black-card bg-main-gradient rounded-3xl lg:rounded-4xl'}`}>
                    <div className="absolute z-0 inset-0 overflow-hidden">
                        <CirclePattern className="-bottom-1/2 lg:-bottom-2/4 -translate-y-24 md:translate-y-56 lg:translate-y-60 left-1/2 -translate-x-1/2 absolute w-[32rem] md:w-[60rem] lg:w-[75rem]" />
                    </div>
                </div>
                <div className=" h-full relative ">
                    <Navbar className="relative" />
                    <div className="relative z-4 px-6 lg:px-12 flex flex-col items-center justify-center">
                        <h1 className="title lg:text-6xl text-3xl text-center max-w-3xl mt-10 lg:mt-18">Discover Fine Watchmaking with Exquisite Timepieces</h1>
                        <p className="mt-6 text-base lg:text-xl text-white/64 max-w-2xl text-center">Explore our curated selection of elegant, precise watches. Each piece is crafted to perfection, blending classic design with modern innovation</p>
                        <div className="flex items-center gap-3 mt-10 lg:mt-7">
                            <button className="button-regular lg:min-w-36">Get Started</button>
                            <button className="button-outlined lg:min-w-36">Explore</button>
                        </div>
                        <div className="group flex items-center justify-center h-60 sm:h-[32rem] w-full lg:w-[88%] mt-36 lg:mt-20 relative overflow-hidden">
                            <div className="absolute z-10 w-full bottom-0 left-0 h-6 sm:h-28 bg-[linear-gradient(180deg,rgba(255,255,255,0.00)_0%,rgba(255,255,255,0.92)_46.38%,#FFF_88.21%)] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.00)_0%,rgb(var(--surface-950))_80.21%)] backdrop-blur-[2px] opacity-90"></div>
                            <Image
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full h-auto z-1 absolute top-0"
                                src={resolvedTheme === 'dark' ? '/pages/saas/hero-dashboard-dark.png' : '/pages/saas/hero-dashboard.png'}
                                alt="Agency Hero Video Background"
                            />
                        </div>
                    </div>
                </div>
                <StaticCustomers className="mt-16" />
            </div>
        </AnimatedContainer>
    );
};

export default SaasHero;
