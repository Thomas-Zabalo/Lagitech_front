import AnimatedContainer from '@/components/AnimatedContainer';
import ScaleCarousel, { ScaleCarouselItem } from '@/components/carousels/ScaleCarousel';
import Image from 'next/image';

const TravelDestinationGallery = () => {
    return (
        <div className="mt-24">
            <h1 className="px-4 text-3xl lg:text-6xl font-semibold text-center mx-auto max-w-2xl leading-tight">
                Escape to Top
                <br /> Vacation Destinations
            </h1>
            <p className="px-4 text-lg mt-6 text-surface-500 text-center mx-auto max-w-2xl">Discover the world’s most popular vacation spots, from tropical beaches to vibrant cityscapes, perfect for creating unforgettable memories</p>
            <div className="mt-14 ">
                <ScaleCarousel height="34rem" size="0%" scale={0.12} options={{ align: 'center', loop: true }}>
                    {galleryData.map((item, i) => (
                        <ScaleCarouselItem key={i} className="min-w-[24rem] ">
                            <AnimatedContainer delay={i * 150} className="h-full w-[23rem] relative rounded-3xl overflow-hidden">
                                <Image className="object-cover" fill sizes="auto" src={item} alt="Destination Gallery Image" />
                            </AnimatedContainer>
                        </ScaleCarouselItem>
                    ))}
                </ScaleCarousel>
            </div>
        </div>
    );
};

export default TravelDestinationGallery;

const galleryData = [
    '/pages/travel/scale-gallery-3.jpg',
    '/pages/travel/scale-gallery-1.jpg',
    '/pages/travel/scale-gallery-2.jpg',
    '/pages/travel/scale-gallery-4.jpg',
    '/pages/travel/scale-gallery-5.jpg',
    '/pages/travel/scale-gallery-3.jpg',
    '/pages/travel/scale-gallery-2.jpg'
];
