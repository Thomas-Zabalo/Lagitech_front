import React from 'react';
import CloudFadeIcon from '@/components/icons/cloud-fade.svg';
import Image from 'next/image';
import AnimatedContainer from '@/components/AnimatedContainer';
const SaasFeatures = () => {
    return (
        <div className="container max-w-[68rem] lg:mt-64 mt-24">
            <div className="icon-box [&>svg]:w-9 [&>svg]:h-9 lg:[&>svg]:w-11 lg:[&>svg]:h-11">
                <CloudFadeIcon />
            </div>
            <h1 className="text-3xl lg:text-5xl text-surface-950 dark:text-surface-0 font-semibold max-w-xs lg:max-w-lg text-center mx-auto mt-10">Simplify Your Work with Our Standout Features</h1>
            <p className="mt-6 mx-auto max-w-md text-center text-lg lg:text-xl text-surface-500 dark:text-white/64">Optimize your workflow and increase your efficiency with features designed to deliver the best results.</p>
            <div className="flex lg:flex-row flex-col items-center gap-7 mt-24 lg:mt-14">
                <AnimatedContainer className="lg:flex-1 w-full lg:w-auto relative h-[29rem] lg:h-[37rem] rounded-3xl lg:rounded-4xl shadow-blue-card bg-main-gradient lg:max-w-none max-w-[30rem]">
                    <Image className="w-[360px] lg:w-[434px] h-auto absolute left-1/2 -translate-x-1/2 -top-10" width={0} height={0} sizes="100vw" src={'/pages/saas/feature-img-1.png'} alt="Features Image" />
                    <div className="absolute bottom-7 lg:bottom-10 left-6 lg:left-8 right-6 lg:right-8">
                        <h5 className="text-lg lg:text-2xl title font-semibold text-center">24/7 Customer Support</h5>
                        <p className="text-sm lg:text-lg text-white/64 text-center mt-3 lg:mt-4">
                            Benefit from our dedicated 24/7 customer support team, always ready to assist you with any questions or issues, ensuring uninterrupted service and peace of mind.
                        </p>
                    </div>
                </AnimatedContainer>
                <AnimatedContainer delay={400} className="lg:flex-1 w-full lg:w-auto relative h-[29rem] lg:h-[37rem] rounded-3xl lg:rounded-4xl shadow-blue-card bg-main-gradient lg:max-w-none max-w-[30rem]">
                    <Image className="w-full lg:w-[466px] h-auto absolute left-1/2 -translate-x-1/2 top-0" width={0} height={0} sizes="100vw" src={'/pages/saas/feature-img-2.png'} alt="Features Image" />
                    <div className="absolute bottom-7 lg:bottom-10 left-6 lg:left-8 right-6 lg:right-8">
                        <h5 className="text-lg lg:text-2xl title font-semibold text-center">Secure Data Storage</h5>
                        <p className="text-sm lg:text-lg text-white/64 text-center mt-3 lg:mt-4">
                            Protect your data with our secure data storage solutions, utilizing advanced encryption and security protocols to safeguard your information at all times.
                        </p>
                    </div>
                </AnimatedContainer>
            </div>
        </div>
    );
};

export default SaasFeatures;
