'use client';
import AnimatedContainer from '@/components/AnimatedContainer';
import CirclePattern from '@/components/CirclePattern';
import FloatingCustomers from '@/components/FloatingCustomers';
import Navbar from '@/components/Navbar';
import { useTheme } from '@/context/ThemeContext';
import Image from 'next/image';
import React from 'react';

const StartupHero = () => {
    const { heroContainerType } = useTheme();
    const isWide = heroContainerType === 'wide';
    return (
        <AnimatedContainer visibleClass="!slide-in-from-top-0" className={`${isWide ? 'bg-main-gradient overflow-hidden' : 'pt-6'}`}>
            <div className="container">
                <div className={`relative  h-[58rem] lg:h-[50rem]  ${isWide ? '' : 'bg-main-gradient rounded-3xl lg:rounded-4xl overflow-hidden'}`}>
                    <div className="relative z-10">
                        <Navbar />
                        <div className="lg:mt-24 lg:ml-20 px-6 pt-10 lg:px-0 lg:pt-0">
                            <h1 className="title lg:text-6xl text-3xl max-w-md lg:max-w-xl !leading-tight lg:text-left text-center mx-auto lg:mx-0">Your Launchpad to Success in the Startup World</h1>
                            <p className="text-base lg:text-xl text-white/64 mt-6 max-w-[30rem] lg:text-left text-center mx-auto lg:mx-0">Join us to transform groundbreaking ideas into reality and drive the next wave of innovation.</p>
                            <div className="mt-8 mx-auto lg:mx-0 pl-6 py-2 pr-2 rounded-full bg-white/1 backdrop-blur-lg flex items-center gap-2 max-w-[27rem] border border-white/12">
                                <input type="text" className="h-full bg-transparent flex-1 w-full outline-none text-surface-0 placeholder:text-white/64" placeholder="E-mail Address" />
                                <button className="button-regular">Get Started</button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 lg:mt-0 w-fit h-auto max-w-none mx-auto lg:mx-0 lg:right-[40px] xl:right-[100px] lg:top-[142px] lg:absolute flex flex-col gap-2 relative z-5">
                        <div className="w-[340px] h-[89.35px] md:w-[360px] md:h-[95px] lg:w-[449px] lg:h-[118px] relative">
                            <div className="w-full h-full rounded-[20px] lg:rounded-[24px] bg-white/10 backdrop-blur-3xl absolute top-0 left-0"></div>
                            <Image className="w-full h-auto absolute top-0 left-0" sizes="100vw" width={0} height={0} src={'/pages/startup/hero-img-sec-1.png'} alt="Hero Image" />
                        </div>
                        <div className="w-[340px] h-[89.35px] md:w-[360px] md:h-[95px] lg:w-[449px] lg:h-[118px] relative">
                            <div className="w-full h-full rounded-[20px] lg:rounded-[24px] bg-white/10 backdrop-blur-3xl absolute top-0 left-0"></div>
                            <Image className="w-full h-auto absolute top-0 left-0" sizes="100vw" width={0} height={0} src={'/pages/startup/hero-img-sec-2.png'} alt="Hero Image" />
                        </div>
                        <div className="w-[340px] h-[89.35px] md:w-[360px] md:h-[95px] lg:w-[449px] lg:h-[118px] relative">
                            <div className="w-full h-full rounded-[20px] lg:rounded-[24px] bg-white/10 backdrop-blur-3xl absolute top-0 left-0"></div>
                            <Image className="w-full h-auto absolute top-0 left-0" sizes="100vw" width={0} height={0} src={'/pages/startup/hero-img-sec-3.png'} alt="Hero Image" />
                        </div>
                    </div>

                    <FloatingCustomers className="absolute bottom-16" />
                    <div className="absolute -right-[42rem] -bottom-[36rem] z-0">
                        <CirclePattern className="w-[72rem] lg:w-[80rem] -rotate-45" />
                    </div>
                </div>
            </div>
        </AnimatedContainer>
    );
};

export default StartupHero;
