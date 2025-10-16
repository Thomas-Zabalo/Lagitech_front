import AnimatedContainer from '@/components/AnimatedContainer';
import Image from 'next/image';
import React from 'react';

const TravelGuides = () => {
    return (
        <AnimatedContainer className="container mt-24 lg:mt-64 relative">
            <div className="w-full relative rounded-t-3xl lg:rounded-t-4xl overflow-hidden">
                <div className="absolute z-2 bottom-0 w-full h-[32%] bg-[linear-gradient(180deg,rgba(255,255,255,0.00)_0%,rgba(255,255,255,0.92)_46.38%,#FFF_88.21%)] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.00)_0%,rgb(var(--surface-950))_88.21%)] backdrop-blur-[1px]"></div>
                <Image className="z-1 w-full h-auto dark:hidden" sizes="100vw" width={0} height={0} src={'/pages/travel/guides-bg.jpg'} alt="Travel Guides Background Image" />
                <Image className="z-1 w-full h-auto hidden dark:block" sizes="100vw" width={0} height={0} src={'/pages/travel/guides-bg-dark.jpg'} alt="Travel Guides Background Image" />
            </div>
            <div className="-mt-20 md:-mt-60 lg:-mt-80 z-3 relative">
                <h2 className="text-3xl lg:text-5xl text-surface-950 dark:text-surface-0 font-semibold text-center !leading-tight max-w-md lg:max-w-2xl mx-auto">Discover Your Next Adventure with Travel Guides</h2>
                <p className="mt-6 text-lg text-surface-500 text-center max-w-lg mx-auto">Whether you’re looking for a relaxing beach getaway or an adventurous mountain trek, we have the perfect itinerary for you.</p>
                <button className="button-gradient mt-10 mx-auto">Book your place now</button>
            </div>
        </AnimatedContainer>
    );
};

export default TravelGuides;
