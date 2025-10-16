import AnimatedContainer from '@/components/AnimatedContainer';
import Image from 'next/image';
import React from 'react';

const StartupFeatures = () => {
    return (
        <div className="container mt-24 lg:mt-64">
            <div className="max-w-[26rem] mx-auto lg:max-w-[72rem] flex flex-col gap-24 lg:gap-64">
                <div className="flex lg:flex-row flex-col gap-20 items-center justify-between">
                    <div className="lg:flex-1 max-w-lg ">
                        <span className="badge">Business</span>
                        <h2 className="mt-4 text-3xl lg:text-5xl font-semibold leading-tight">Scale Your Business with Confidence</h2>
                        <p className="mt-6 text-lg text-surface-500">Utilize our scalable infrastructure and resources to support your startup’s growth and reach new heights.</p>
                        <ul className="mt-8 flex flex-col gap-3.5">
                            <li className="inline-flex items-center gap-3 text-surface-500">
                                <i className="pi pi-check-circle"></i>
                                <span className="text-lg">Cloud-Based Solutions</span>
                            </li>
                            <li className="inline-flex items-center gap-3 text-surface-500">
                                <i className="pi pi-check-circle"></i>
                                <span className="text-lg">Scalable Server Capacity</span>
                            </li>
                            <li className="inline-flex items-center gap-3 text-surface-500">
                                <i className="pi pi-check-circle"></i>
                                <span className="text-lg">Robust Backup Systems</span>
                            </li>
                        </ul>
                        <button className="button-gradient mt-8">Get Started</button>
                    </div>
                    <AnimatedContainer visibleClass="slide-in-from-right-32 !slide-in-from-top-0" className="lg:flex-1 w-full max-w-[35rem] h-[23rem] lg:h-[31rem] bg-main-gradient rounded-3xl relative lg:rounded-4xl">
                        <Image className="w-full h-auto absolute max-w-none" width={0} height={0} sizes="100vw" src={'/pages/startup/feature-img-1.png'} alt="Startup Features Image 1" />
                    </AnimatedContainer>
                </div>
                <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-20 lg:gap-0">
                    <div className="lg:flex-1 max-w-[29.3rem] ">
                        <span className="badge">Optimize</span>
                        <h2 className="mt-4 text-3xl lg:text-5xl font-semibold leading-tight">Optimize Your Startup Operations</h2>
                        <p className="mt-6 text-lg text-surface-500">Enhance your startup’s efficiency and productivity with our innovative solutions tailored for emerging businesses.</p>
                        <ul className="mt-8 flex flex-col gap-3.5">
                            <li className="inline-flex items-center gap-3 text-surface-500">
                                <i className="pi pi-check-circle"></i>
                                <span className="text-lg">Automated Task Management</span>
                            </li>
                            <li className="inline-flex items-center gap-3 text-surface-500">
                                <i className="pi pi-check-circle"></i>
                                <span className="text-lg">Real-Time Collaboration Tools</span>
                            </li>
                            <li className="inline-flex items-center gap-3 text-surface-500">
                                <i className="pi pi-check-circle"></i>
                                <span className="text-lg">Performance Analytics</span>
                            </li>
                        </ul>
                        <button className="button-gradient mt-8">Get Started</button>
                    </div>
                    <AnimatedContainer visibleClass="slide-in-from-left-32 !slide-in-from-top-0" className="w-full lg:flex-1 max-w-[35rem] h-[23rem] lg:h-[31rem] bg-main-gradient rounded-3xl lg:rounded-4xl relative">
                        <Image className="w-full h-auto absolute max-w-none" width={0} height={0} sizes="100vw" src={'/pages/startup/feature-img-2.png'} alt="Startup Features Image 2" />
                    </AnimatedContainer>
                </div>
            </div>
        </div>
    );
};

export default StartupFeatures;
