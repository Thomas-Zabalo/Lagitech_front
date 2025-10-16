'use client';
import AnimatedContainer from '@/components/AnimatedContainer';
import CirclePattern from '@/components/CirclePattern';
import Navbar from '@/components/Navbar';
import { useTheme } from '@/context/ThemeContext';
import Image from 'next/image';

const AboutHero = () => {
    const { heroContainerType } = useTheme();
    const isWide = heroContainerType === 'wide';
    return (
        <AnimatedContainer visibleClass="!slide-in-from-top-0" className={`${isWide ? 'relative' : 'pt-6'}`}>
            {isWide ? <div className="bg-main-gradient absolute top-0 inset-x-0 h-[45rem] lg:h-[51.5rem]"></div> : null}
            <div className="container relative">
                <div className={` absolute top-0 left-4 right-4   h-[45rem] lg:h-[51.5rem] ${isWide ? '' : 'bg-main-gradient rounded-3xl lg:rounded-4xl'}`}>
                    <div className="absolute inset-0 overflow-hidden lg:block hidden">
                        <CirclePattern className="absolute w-[82rem] -bottom-full translate-y-24 left-1/2 -translate-x-1/2" />
                    </div>
                </div>
                <div className="relative z-20">
                    <Navbar />
                    <h1 className="max-w-[calc(100%-3rem)] md:max-w-5xl mx-auto title lg:text-7xl text-4xl text-center mt-18">Discover How We Strive to Deliver Unparalleled Innovation</h1>
                    <p className="mt-6 max-w-[calc(100%-3rem)] md:max-w-2xl text-lg lg:text-xl text-white/64 text-center mx-auto">
                        We develop cutting-edge solutions and provide exceptional services to drive our clients’ success and exceed their expectations.
                    </p>
                </div>
                <div className="relative z-10 h-[35rem] max-w-[calc(100%-3rem)] lg:max-w-[calc(100%-12rem)] mt-12 lg:mt-48 mx-auto rounded-3xl lg:rounded-4xl shadow-black-card overflow-hidden">
                    <Image fill sizes="auto" className="object-cover" src={'/pages/about/hero-image.jpg'} alt="Blog Hero Image" />
                </div>
                <div className="max-w-[calc(100%-3rem)] lg:max-w-[calc(100%-12rem)] mx-auto mt-16 flex flex-wrap gap-6">
                    {stats.map((item, index) => (
                        <AnimatedContainer key={index} delay={index * 100} className="flex flex-col items-center justify-center gap-4 rounded-3xl p-7 flex-1 shadow-stroke dark:shadow-none border-0 dark:border dark:border-white/12">
                            <span className="text-4xl font-semibold text-surface-950 dark:text-surface-0">{item.value}</span>
                            <span className="text-surface-500 dark:text-white/64 text-center">{item.label}</span>
                        </AnimatedContainer>
                    ))}
                </div>
            </div>
        </AnimatedContainer>
    );
};

export default AboutHero;

const stats = [
    {
        label: 'years of experience',
        value: '20+'
    },
    {
        label: '10,000 successful projects.',
        value: '10K+'
    },
    {
        label: '95% customer satisfaction.',
        value: '95%'
    },
    {
        label: 'over 15 awards',
        value: '15+'
    }
];
