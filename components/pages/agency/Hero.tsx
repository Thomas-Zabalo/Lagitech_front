'use client';
import AnimatedContainer from '@/components/AnimatedContainer';
import CirclePattern from '@/components/CirclePattern';
import Navbar from '@/components/Navbar';
import StaticCustomers from '@/components/StaticCustomers';
import PlayIcon from '@/components/icons/play.svg';
import Shape2 from '@/components/icons/shapes/shape-2.svg';
import Shape3 from '@/components/icons/shapes/shape-3.svg';
import Shape4 from '@/components/icons/shapes/shape-4.svg';
import Shape5 from '@/components/icons/shapes/shape-5.svg';
import { Modal, ModalCloseButton, ModalContent, ModalOverlay, ModalTrigger } from '@/components/ui/modal';
import { useTheme } from '@/context/ThemeContext';
import Image from 'next/image';
const AgencyHero = () => {
    const { heroContainerType } = useTheme();
    const isWide = heroContainerType === 'wide';
    return (
        <AnimatedContainer visibleClass="!slide-in-from-top-0" className={`overflow-hidden ${isWide ? '' : 'pt-6'}`}>
            {isWide ? (
                <div className="absolute top-0 inset-x-0 h-[45rem] lg:h-[42rem] shadow-black-card bg-main-gradient overflow-hidden">
                    <CirclePattern className="absolute -bottom-[115%] -right-[40rem] w-[82rem] lg:block hidden" />
                </div>
            ) : null}
            <div className="container relative">
                {isWide ? null : (
                    <div className="absolute top-0 left-4 right-4 h-[45rem] lg:h-[42rem] rounded-3xl lg:rounded-4xl  shadow-black-card bg-main-gradient overflow-hidden">
                        <CirclePattern className="absolute -bottom-[115%] -right-[40rem] w-[82rem] lg:block hidden" />
                    </div>
                )}
                <div className=" h-full relative ">
                    <Navbar className="relative" />
                    <div className="px-6 lg:px-12 mt-10 lg:mt-20 relative z-4">
                        <h1 className=" !leading-tight text-white text-4xl lg:text-7xl font-semibold lg:px-3">
                            Let&apos;s Shape{' '}
                            <span className="hidden lg:inline-flex w-[25rem] justify-between p-2 border border-white/12 rounded-full">
                                <Shape2 />
                                <Shape3 />
                                <Shape4 />
                                <Shape5 />
                            </span>{' '}
                            Your Distinctive Brand’s Presence
                        </h1>
                        <p className="mt-5 text-lg text-white/72">Optimize your supply chain with our cutting-edge logistics solutions, ensuring timely and efficient delivery of your goods worldwide.</p>

                        <Modal>
                            <ModalTrigger asChild>
                                <div className="group flex items-center justify-center h-[32rem] w-full mt-12 lg:mt-10 rounded-4xl relative overflow-hidden shadow-blue-card cursor-pointer">
                                    <div className="absolute inset-0 z-2 bg-[linear-gradient(0deg,rgba(0,0,0,0.06)_0%,rgba(0,0,0,0.06)_100%)]" />
                                    <Image fill sizes="auto" className="object-cover z-1" src="/pages/agency/hero-video-background.jpg" alt="Agency Hero Video Background" />
                                    <button className="relative z-3 w-24 h-24 rounded-full bg-white/12 group-hover:bg-white/24 transition-all backdrop-blur-sm border border-white/32 flex items-center justify-center">
                                        <PlayIcon />
                                    </button>
                                </div>
                            </ModalTrigger>
                            <ModalOverlay>
                                <ModalContent className="sm:max-w-4xl">
                                    <div className="flex items-start justify-between gap-2">
                                        <h2 className="text-xl text-surface-950 dark:text-surface-0 font-medium">Video</h2>
                                        <ModalCloseButton></ModalCloseButton>
                                    </div>
                                    <iframe
                                        className="aspect-video w-full rounded-xl overflow-hidden"
                                        src="https://www.youtube.com/embed/DHqNzO1kj2o"
                                        title="Cagatay Civici - PrimeVue | The Next-Gen UI Component Library - Vuejs Amsterdam 2024"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    ></iframe>
                                </ModalContent>
                            </ModalOverlay>
                        </Modal>
                    </div>
                </div>
                <StaticCustomers className="mt-16" />
                <h1 className="mt-12 text-3xl lg:text-5xl font-semibold !leading-tight text-surface-950 dark:text-surface-0">
                    ‘’We are a creative agency focused on transforming ideas into impactful brand experiences. Our team specializes in brand strategy, design, and digital solutions,{' '}
                    <span className="text-surface-500 dark:text-white/64">dedicated to helping your brand stand out and connect with your audience through innovative and inspiring approaches.’’</span>
                </h1>
            </div>
        </AnimatedContainer>
    );
};

export default AgencyHero;
