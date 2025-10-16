import AnimatedContainer from '@/components/AnimatedContainer';
import CirclePattern from '@/components/CirclePattern';
import Image from 'next/image';

const ELearningCTA = () => {
    return (
        <AnimatedContainer className="container mt-24 lg:mt-64">
            <div className="bg-main-gradient shadow-black-card rounded-3xl lg:rounded-[3rem] h-[48rem] lg:h-auto p-8 lg:p-24 relative overflow-hidden">
                <CirclePattern className="absolute w-[60rem] lg:right-0 lg:left-auto left-1/2 bottom-0 -translate-x-1/2 lg:translate-x-1/2 translate-y-1/2" />
                <div className="w-[38rem] h-[30rem] absolute lg:right-12 lg:left-auto left-1/2 -translate-x-1/2 lg:translate-x-0 bottom-0 lg:-bottom-6">
                    <Image fill sizes="auto" className="scale-[1.5] object-center lg:object-top object-contain" src="/pages/e-learning/cta-image.png" alt="CTA Image" />
                </div>
                <h1 className="title max-w-2xl text-3xl lg:text-5xl !leading-tight">Unlock a World of Knowledge Through Headphones</h1>
                <p className="description max-w-lg mt-6 text-white/64">Carry knowledge with you anytime through our content-rich podcasts and online courses.</p>
                <div className="mt-8 hidden lg:flex items-center gap-3">
                    <button className="button-regular py-3">Get Started</button>
                    <button className="button-blur bg-white/1 hover:bg-white/8 h-auto py-3 border-white/12">
                        <i className="pi pi-play-circle"></i>
                        Discover Now
                    </button>
                </div>
            </div>
        </AnimatedContainer>
    );
};

export default ELearningCTA;
