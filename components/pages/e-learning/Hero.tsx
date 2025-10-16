'use client';
import AnimatedContainer from '@/components/AnimatedContainer';
import Navbar from '@/components/Navbar';
import StaticCustomers from '@/components/StaticCustomers';
import { useTheme } from '@/context/ThemeContext';
import Image from 'next/image';

const ELearningHero = () => {
    const { heroContainerType } = useTheme();
    const isWide = heroContainerType === 'wide';
    return (
        <AnimatedContainer visibleClass="!slide-in-from-top-0" className={`${isWide ? '' : 'pt-6'}`}>
            {isWide ? (
                <div className="absolute top-0 left-0 w-full h-[51rem] lg:h-[54.5rem] shadow-black-card ">
                    <div className="absolute inset-0 -z-1 bg-[linear-gradient(0deg,rgba(0,0,0,0.40)_0%,rgba(0,0,0,0.40)_100%)]"></div>
                    <Image fill sizes="auto" className="object-cover -z-2" src="/pages/e-learning/hero-background.jpg" alt="E-learning Hero Image" />
                </div>
            ) : null}
            <div className="container">
                <div className={`h-[51rem] lg:h-[54.5rem]  relative  ${isWide ? '' : 'rounded-3xl lg:rounded-4xl overflow-hidden shadow-black-card'}`}>
                    <Navbar />
                    <div className="absolute bottom-6 lg:bottom-24 inset-x-6 lg:inset-x-24">
                        <h1 className="title lg:text-7xl text-4xl max-w-[42rem]">Unlock Your Potential with Expert-Led Courses</h1>
                        <p className="description max-w-[42rem] mt-6">Explore our curated selection of high-quality courses. Each lesson is designed to perfection, blending expert knowledge with innovative learning methods.</p>
                        <div className="mt-10 flex items-center gap-3">
                            <button className="button-regular">Get Started</button>
                            <button className="button-outlined">
                                <i className="pi pi-play-circle"></i>
                                Discover Now
                            </button>
                        </div>
                    </div>
                    {!isWide ? (
                        <>
                            <div className="absolute inset-0 -z-1 bg-[linear-gradient(0deg,rgba(0,0,0,0.40)_0%,rgba(0,0,0,0.40)_100%)]"></div>
                            <Image fill sizes="auto" className="object-cover -z-2" src="/pages/e-learning/hero-background.jpg" alt="E-learning Hero Image" />
                        </>
                    ) : null}
                </div>
                <StaticCustomers className="mt-16" />
            </div>
        </AnimatedContainer>
    );
};

export default ELearningHero;
