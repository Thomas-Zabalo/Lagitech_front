import AnimatedContainer from '@/components/AnimatedContainer';
import Image from 'next/image';

const TravelCTA = () => {
    return (
        <div className="container mt-24 lg:mt-64">
            <div className="mt-32 flex md:flex-row flex-col gap-6">
                {ctaData.map((item, i) => (
                    <AnimatedContainer key={i} delay={i * 150} className="relative lg:flex-1 h-[48rem] rounded-3xl lg:rounded-4xl shadow-blue-card overflow-hidden">
                        <div className="absolute inset-0 -z-1 bg-[linear-gradient(0deg,rgba(0,0,0,0.12)_0%,rgba(0,0,0,0.12)_100%)]"></div>
                        <div style={{ writingMode: 'vertical-lr', transform: 'scale(-1, -1)' }} className="absolute bottom-12 right-4 text-[10rem] title bg-[linear-gradient(0deg,rgba(255,255,255,0.76)_0%,rgba(255,255,255,0.63)_100%)]">
                            {item.title}
                        </div>
                        <Image fill sizes="auto" className="object-cover -z-2" src={item.image} alt="Travel CTA Image" />
                    </AnimatedContainer>
                ))}
            </div>
        </div>
    );
};

export default TravelCTA;

const ctaData = [
    {
        title: 'Paris',
        image: '/pages/travel/grid-paris.jpg'
    },
    {
        title: 'Spain',
        image: '/pages/travel/cta-spain.jpg'
    },
    {
        title: 'Italy',
        image: '/pages/travel/cta-italy.jpg'
    }
];
