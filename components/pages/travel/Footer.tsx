import AnimatedContainer from '@/components/AnimatedContainer';
import Footer from '@/components/Footer';
import Image from 'next/image';

const TravelFooter = () => {
    return (
        <AnimatedContainer className="max-w-[82rem] px-4 mx-auto mt-24 lg:mt-64 ">
            <div className="w-full h-full relative rounded-3xl lg:rounded-4xl overflow-hidden block pt-4 lg:pt-[32rem]">
                <div className="absolute inset-0">
                    <Image fill sizes="auto" className="object-cover absolute inset-0 max-w-none" src="/pages/travel/footer-bg.jpg" alt="Footer Background Image" />
                </div>
                <div className="lg:block  hidden absolute left-1/2 -translate-x-1/2 z-2 text-[6rem] lg:text-[18rem] top-60 lg:top-0 font-semibold title [background-image:radial-gradient(235.17%_97.94%_at_53.25%_-29.68%,#FFF_0%,rgba(255,255,255,0.00)_97%)] ">
                    Genesis
                </div>
                <Footer noContainer transparent />
            </div>
        </AnimatedContainer>
    );
};

export default TravelFooter;
