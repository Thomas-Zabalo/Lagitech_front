import AnimatedContainer from '@/components/AnimatedContainer';
import PlayIcon from '@/components/icons/play.svg';
import YoutubeFadeLogo from '@/components/icons/youtube-fade.svg';
import { Modal, ModalCloseButton, ModalContent, ModalOverlay, ModalTrigger } from '@/components/ui/modal';
import Image from 'next/image';
const ELearningVideoLecture = () => {
    return (
        <AnimatedContainer className="mt-24 lg:mt-64 container">
            <div className="icon-box [&>svg]:w-9 [&>svg]:h-9 [&>svg]:lg:w-11 [&>svg]:lg:h-11">
                <YoutubeFadeLogo />
            </div>
            <h1 className="text-3xl lg:text-5xl font-semibold text-surface-950 dark:text-surface-0 mx-auto text-center mt-10">Video Lecture Hub</h1>
            <p className="mt-6 text-lg text-surface-500 dark:text-white/64 mx-auto text-center">Expert-led lectures across diverse subjects to expand your knowledge.</p>
            <Modal>
                <ModalTrigger asChild>
                    <div className="mt-16 relative h-[32rem] lg:h-[43.5rem] w-full rounded-2xl lg:rounded-4xl overflow-hidden shadow-black-card cursor-pointer group">
                        <div className="absolute flex items-center justify-center -z-1 inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.24)_0%,rgba(0,0,0,0.24)_100%)]">
                            <button className="w-24 h-24 rounded-full flex items-center justify-center bg-white/12 group-hover:bg-white/24 transition-all backdrop-blur-[5px] border border-white/32">
                                <PlayIcon />
                            </button>
                        </div>
                        <Image fill sizes="auto" className="object-cover -z-2" src="/pages/e-learning/video-lecture-bg.jpg" alt="E-learning Video Lecture Background" />
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
        </AnimatedContainer>
    );
};

export default ELearningVideoLecture;
