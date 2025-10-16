'use client';
import AnimatedContainer from '@/components/AnimatedContainer';
import Carousel, { CarouselItem } from '@/components/carousels/Carousel';
import useIsMobile from '@/lib/hooks/use-is-mobile';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

const StartupTeam = () => {
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
        <AnimatedContainer className="w-full overflow-hidden pb-6">
            <div className="container px-0 lg:px-4 overflow-visible mt-24 lg:mt-64 relative">
                <h1 className="px-4 lg:px-0 text-center lg:text-left text-3xl lg:text-8xl text-surface-950 dark:text-surface-0 font-semibold !leading-snug">
                    Meet Our Talented <br className="lg:block hidden" />
                    Team
                </h1>
                <p className="px-4 lg:px-0 mt-3 lg:mt-8 mx-auto lg:mx-0 text-lg lg:text-xl text-surface-500 max-w-md lg:max-w-sm lg:text-left text-center">
                    Our diverse team of experts is dedicated to driving innovation and delivering exceptional results. With a blend of creativity, technical expertise, and strategic thinking, each member brings a unique set of skills and experiences
                    to the table.{' '}
                </p>
                <div className="mt-14 mb-0 hidden lg:flex items-center gap-6">
                    <button onClick={handlePrev} className="w-[5.5rem] h-12 shadow-stroke dark:shadow-none border-0 dark:border border-white/12 rounded-full">
                        <i className="pi pi-arrow-left text-xl"></i>
                    </button>
                    <button onClick={handleNext} className="w-[5.5rem] h-12 shadow-stroke dark:shadow-none border-0 dark:border border-white/12 rounded-full">
                        <i className="pi pi-arrow-right text-xl"></i>
                    </button>
                </div>
                <div className="w-full overflow-hidden lg:absolute lg:left-[30rem] lg:top-[8.5rem] mt-10 lg:mt-0 pl-12 lg:pl-0">
                    <div className="w-40 h-full absolute right-0 z-10 bg-[linear-gradient(-90deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_80%)] dark:bg-[linear-gradient(-90deg,rgba(var(--surface-950))_0%,rgba(255,255,255,0)_80%)]"></div>
                    <Carousel ref={carouselRef} hideButtons hideMask height="26rem" options={{ loop: true, align: isMobile ? 'center' : 'start' }} className="max-w-none" refContainerClass="overflow-visible lg:overflow-hidden relative">
                        {startupTeamData.map((item, index) => (
                            <CarouselItem key={index} className="min-w-[18.5rem]">
                                <AnimatedContainer delay={200 * index} className="group relative w-full h-full rounded-3xl lg:rounded-4xl shadow-blue-card overflow-hidden">
                                    <Image className="object-cover -z-2" fill sizes="auto" src={item.image} alt="Startup Team Item" />
                                    <div className="opacity-0 group-hover:opacity-100 transition-all absolute inset-0 z-1 bg-[linear-gradient(0deg,rgba(0,0,0,0.49)_0%,rgba(0,0,0,0.49)_100%)]"></div>
                                    <div className="opacity-0 group-hover:opacity-100 transition-all absolute z-2 bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center">
                                        <div className="flex items-center justify-center gap-2">
                                            <Link href={item.facebook} className="w-14 h-8 rounded-full flex items-center justify-center text-surface-0 border border-white/12 backdrop-blur-sm bg-white/4">
                                                <i className="pi pi-facebook"></i>
                                            </Link>
                                            <Link href={item.facebook} className="w-14 h-8 rounded-full flex items-center justify-center text-surface-0 border border-white/12 backdrop-blur-sm bg-white/4">
                                                <i className="pi pi-twitter"></i>
                                            </Link>
                                            <Link href={item.facebook} className="w-14 h-8 rounded-full flex items-center justify-center text-surface-0 border border-white/12 backdrop-blur-sm bg-white/4">
                                                <i className="pi pi-github"></i>
                                            </Link>
                                        </div>
                                        <span className="mt-4 text-center text-2xl text-surface-0 font-semibold">{item.name}</span>
                                    </div>
                                </AnimatedContainer>
                            </CarouselItem>
                        ))}
                    </Carousel>
                </div>
                <div className="flex items-center justify-center lg:hidden gap-6 mt-10">
                    <button onClick={handlePrev} className="w-[5.5rem] h-12 shadow-stroke dark:shadow-none border-0 dark:border border-white/12 rounded-full">
                        <i className="pi pi-arrow-left text-xl"></i>
                    </button>
                    <button onClick={handleNext} className="w-[5.5rem] h-12 shadow-stroke dark:shadow-none border-0 dark:border border-white/12 rounded-full">
                        <i className="pi pi-arrow-right text-xl"></i>
                    </button>
                </div>
            </div>
        </AnimatedContainer>
    );
};

export default StartupTeam;

const startupTeamData = [
    {
        image: '/pages/startup/team-person-1.jpg',
        name: 'Emma Johnson',
        twitter: 'x',
        facebook: 'x',
        github: 'x'
    },
    {
        image: '/pages/startup/team-person-2.jpg',
        name: 'Robert Jonas',
        twitter: 'x',
        facebook: 'x',
        github: 'x'
    },
    {
        image: '/pages/startup/team-person-3.jpg',
        name: 'Olivia Smith',
        twitter: 'x',
        facebook: 'x',
        github: 'x'
    },
    {
        image: '/pages/startup/team-person-4.jpg',
        name: 'Sophia Williams',
        twitter: 'x',
        facebook: 'x',
        github: 'x'
    },
    {
        image: '/pages/startup/team-person-1.jpg',
        name: 'Emma Johnson',
        twitter: 'x',
        facebook: 'x',
        github: 'x'
    },
    {
        image: '/pages/startup/team-person-3.jpg',
        name: 'Olivia Smith',
        twitter: 'x',
        facebook: 'x',
        github: 'x'
    }
];
