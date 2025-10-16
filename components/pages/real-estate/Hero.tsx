'use client';
import AnimatedContainer from '@/components/AnimatedContainer';
import FloatingCustomers from '@/components/FloatingCustomers';
import Navbar from '@/components/Navbar';
import { useTheme } from '@/context/ThemeContext';
import Image from 'next/image';
import Link from 'next/link';
const RealEstateHero = () => {
    const localLoader = ({ src }: { src: string }) => src;

    const { heroContainerType } = useTheme();
    const isWide = heroContainerType === 'wide';
    return (
        <AnimatedContainer visibleClass="!slide-in-from-top-0" className={`${isWide ? 'relative h-[56rem] lg:h-[50rem]' : 'pt-6'}`}>
            {isWide ? (
                <div className="absolute w-full h-[calc(100%-6rem)] top-0 left-0">
                    <Image className="w-full h-full object-cover absolute inset-0 -z-2"  loader={localLoader}
                           src="/pages/real-estate/MainBefore.jpg" alt="Logistic Hero Background Image" fill sizes="auto" loading="eager" />
                    <div className="absolute inset-0 -z-1 bg-[linear-gradient(0deg,rgba(0,0,0,0.12)_0%,rgba(0,0,0,0.12)_100%)]" />
                </div>
            ) : null}
            <div className="container">
                <div className={`h-[50rem] lg:h-[44rem] relative ${isWide ? '' : 'shadow-black-card overflow-hidden rounded-3xl lg:rounded-4xl '}`}>
                    {isWide ? null : (
                        <>
                            <Image className="w-full h-full object-cover absolute inset-0 -z-2" src="/pages/real-estate/MainBefore.jpg" alt="Logistic Hero Background Image" fill sizes="auto" loading="eager" />
                            <div className="absolute inset-0 -z-1 bg-[linear-gradient(0deg,rgba(0,0,0,0.12)_0%,rgba(0,0,0,0.12)_100%)]" />
                        </>
                    )}
                    <Navbar />
                    <div className="lg:mt-16 lg:ml-24 mt-10 px-6 lg:px-0">
                        <h1 className="title text-4xl lg:text-8xl leading-tight max-w-5xl">Discover Your Perfect Dream Home</h1>
                        <p className="mt-6 description text-white/72 max-w-lg">Browse our extensive listings to find the ideal property that fits your lifestyle and budget</p>
                        <div className="mt-8 flex items-center gap-3">
                            <Link href={''} className="button-regular">
                                Get Started
                            </Link>
                            <Link href={''} className="button-outlined">
                                Explore
                            </Link>
                        </div>
                    </div>
                </div>
                <FloatingCustomers className="mt-20" iconClass="[&_path]:fill-surface-500 dark:[&_path]:fill-white/64" labelClass="text-surface-500 dark:text-white/64" />
            </div>
        </AnimatedContainer>
    );
};

export default RealEstateHero;
