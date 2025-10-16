'use client';
import AnimatedContainer from '@/components/AnimatedContainer';
import Carousel, { CarouselItem } from '@/components/carousels/Carousel';
import useIsMobile from '@/lib/hooks/use-is-mobile';
import Image from 'next/image';
import { useRef } from 'react';

const TravelEscapeGallery = () => {
    const isMobile = useIsMobile();
    const carouselRef = useRef<{
        onPrev: () => void;
        onNext: () => void;
    }>(null);

    const handlePrev = () => {
        if (carouselRef.current) {
            carouselRef.current.onPrev();
        }
    };

    const handleNext = () => {
        if (carouselRef.current) {
            carouselRef.current.onNext();
        }
    };
    return (
        <div className="container mt-24 lg:mt-64">
            <div className="min-h-[54rem] lg:min-h-[44rem] relative rounded-3xl lg:rounded-4xl overflow-hidden shadow-blue-card py-16 lg:py-0">
                <Image fill sizes="auto" className="object-cover -z-2" src="/pages/travel/escape-gallery-bg.jpg" alt="Travel Escape Gallery Background" />
                <div className="absolute inset-0 -z-1 bg-[linear-gradient(0deg,rgba(0,0,0,0.12)_0%,rgba(0,0,0,0.12)_100%)]"></div>
                <div className="lg:absolute px-12 lg:px-0 inset-x-16 inset-y-16 flex flex-col justify-between">
                    <div>
                        <h1 className="text-4xl lg:text-[5.625rem] leading-tight text-surface-0 font-semibold max-w-3xl">
                            Find Your <span className="text-white/12 [-webkit-text-stroke-width:1px] [-webkit-text-stroke-color:white]">Perfect Escape</span>
                        </h1>
                        <p className=" text-white/80 mt-7 max-w-xs">Whether you seek sun-soaked beaches, serene natural landscapes, or thrilling adventures, discover destinations tailored to your dream getaway.</p>
                    </div>
                    <div className="mt-auto mb-0 hidden lg:flex items-center gap-6">
                        <button
                            onClick={handlePrev}
                            className="w-[5.5rem] h-12 border border-white/12 backdrop-blur-[48px] rounded-full bg-white/12 shadow-[0px_10px_10px_-8px_rgba(18,18,23,0.02),0px_2px_2px_-1.5px_rgba(18,18,23,0.02),0px_1px_1px_-0.5px_rgba(18,18,23,0.02)]"
                        >
                            <i className="pi pi-arrow-left text-surface-0 text-xl"></i>
                        </button>
                        <button
                            onClick={handleNext}
                            className="w-[5.5rem] h-12 border border-white/12 backdrop-blur-[48px] rounded-full bg-white/12 shadow-[0px_10px_10px_-8px_rgba(18,18,23,0.02),0px_2px_2px_-1.5px_rgba(18,18,23,0.02),0px_1px_1px_-0.5px_rgba(18,18,23,0.02)]"
                        >
                            <i className="pi pi-arrow-right text-surface-0 text-xl"></i>
                        </button>
                    </div>
                </div>
                <div className="lg:absolute lg:left-[26.5rem] lg:bottom-16 mt-10 lg:mt-0 ">
                    <Carousel ref={carouselRef} hideButtons hideMask height="26rem" options={{ loop: true, align: isMobile ? 'center' : 'start' }} className="max-w-[60rem]" refContainerClass="overflow-visible lg:overflow-hidden">
                        {escapeGalleryData.map((item, index) => (
                            <CarouselItem key={index} className="min-w-[18.25rem]">
                                <AnimatedContainer delay={200 * index} className="relative w-full h-full rounded-3xl shadow-blue-card overflow-hidden">
                                    <Image className="object-cover -z-2" fill sizes="auto" src={item.image} alt="Escape Gallery Item" />
                                    <div className="absolute inset-0 -z-1 bg-[linear-gradient(0deg,rgba(0,0,0,0.16)_0%,rgba(0,0,0,0.16)_100%)]"></div>
                                </AnimatedContainer>
                            </CarouselItem>
                        ))}
                    </Carousel>
                </div>
                <div className="flex items-center justify-center lg:hidden gap-6 mt-10">
                    <button
                        onClick={handlePrev}
                        className="w-[5.5rem] h-12 border border-white/12 backdrop-blur-[48px] rounded-full bg-white/12 shadow-[0px_10px_10px_-8px_rgba(18,18,23,0.02),0px_2px_2px_-1.5px_rgba(18,18,23,0.02),0px_1px_1px_-0.5px_rgba(18,18,23,0.02)]"
                    >
                        <i className="pi pi-arrow-left text-surface-0 text-xl"></i>
                    </button>
                    <button
                        onClick={handleNext}
                        className="w-[5.5rem] h-12 border border-white/12 backdrop-blur-[48px] rounded-full bg-white/12 shadow-[0px_10px_10px_-8px_rgba(18,18,23,0.02),0px_2px_2px_-1.5px_rgba(18,18,23,0.02),0px_1px_1px_-0.5px_rgba(18,18,23,0.02)]"
                    >
                        <i className="pi pi-arrow-right text-surface-0 text-xl"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TravelEscapeGallery;

const escapeGalleryData = [
    {
        title: 'Beach',
        image: '/pages/travel/escape-beach.jpg'
    },
    {
        title: 'Beach',
        image: '/pages/travel/escape-nature.jpg'
    },
    {
        title: 'Beach',
        image: '/pages/travel/escape-hotel.jpg'
    },
    {
        title: 'Beach',
        image: '/pages/travel/escape-beach.jpg'
    },
    {
        title: 'Beach',
        image: '/pages/travel/escape-nature.jpg'
    },
    {
        title: 'Beach',
        image: '/pages/travel/escape-hotel.jpg'
    }
];
