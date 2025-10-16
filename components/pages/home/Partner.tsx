import AnimatedContainer from '@/components/AnimatedContainer';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

const realEstatePartnerData = [
    {
        image: '/pages/real-estate/partner-image-1.jpg',
        stats: '20+',
        description: 'We have been serving our valued clients for over 20 years, providing expert guidance and support in all aspects of real estate.',
        delay: 0
    },
    {
        image: '/pages/real-estate/partner-image-2.jpg',
        stats: '178+',
        description: 'Our team has successfully closed thousands of transactions, ensuring each client finds the property that best suits their needs.',
        delay: 400
    },
    {
        image: '/pages/real-estate/partner-image-3.jpg',
        stats: '480+',
        description: 'Our focus on personalized service and attention to detail has earned us a reputation for reliability and trustworthiness in the real estate community.',
        delay: 800
    }
];
const HomePartner: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => {
    return (
        <div className={cn('container mt-24 lg:mt-32 ', className)} {...props}>
            <div className="w-full flex flex-wrap items-start justify-between gap-6">
                <h1 className="max-w-[34rem] text-3xl lg:text-6xl font-semibold text-surface-950 dark:text-surface-0 leading-tight">Your Trusted Real Estate Partner</h1>
                <div className="max-w-[34rem] ">
                    <p className="text-lg text-surface-500 dark:text-white/64">
                        With decades of experience, we are dedicated to helping you find your perfect home. Our commitment to excellence and customer satisfaction makes us a leading name in the market.
                    </p>
                    <button className="mt-6 button-gradient">Learn More</button>
                </div>
            </div>
            <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-6">
                {realEstatePartnerData.map((item, index) => (
                    <AnimatedContainer key={index} delay={item.delay} className="relative h-[34rem] rounded-3xl overflow-hidden shadow-blue-card">
                        <Image fill sizes="auto" className="object-cover -z-2" src={item.image} alt="Real Estate Partner Image" />
                        <div className="-z-1 inset-0 absolute bg-[linear-gradient(180deg,rgba(0,0,0,0.00)_0%,rgba(0,0,0,0.48)_64.82%)]" />
                        <div className="absolute z-1 bottom-8 left-8 right-8">
                            <h1 className="text-8xl font-semibold title">{item.stats}</h1>
                            <p className="text-white/88">{item.description}</p>
                        </div>
                    </AnimatedContainer>
                ))}
            </div>
        </div>
    );
};

export default HomePartner;
