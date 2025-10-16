import AnimatedContainer from '@/components/AnimatedContainer';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TravelDestinationGrid = () => {
    return (
        <div className="px-4 mt-24 lg:mt-64 overflow-hidden w-full">
            <h1 className="text-3xl lg:text-6xl font-semibold text-surface-950 dark:text-surface-0 text-center max-w-xl mx-auto leading-tight">Escape to Your Dream Destinations</h1>
            <p className="mt-6 text-lg text-surface-500 dark:text-white/64 max-w-lg text-center mx-auto">Discover the world’s most popular vacation spots and create unforgettable memories.</p>
            <div className="mx-auto mt-14 relative min-[1200px]:w-[1152px] w-full min-[1200px]:h-[95rem] space-y-6 min-[1200px]:space-y-0">
                <TravelDestinationGridCard className="min-[1200px]:top-0 min-[1200px]:left-0 w-full md:w-1/2 mx-auto min-[1200px]:w-[370px] h-[616px]" image="/pages/travel/grid-paris.jpg" title="Paris, France" href="" />
                <TravelDestinationGridCard className="min-[1200px]:top-0 min-[1200px]:left-[391px] w-full md:w-1/2 mx-auto min-[1200px]:w-[761px] h-[369px] " image="/pages/travel/grid-rome.jpg" title="Rome, Italy" href="" />
                <TravelDestinationGridCard className="min-[1200px]:top-[637px] min-[1200px]:left-0 w-full md:w-1/2 mx-auto min-[1200px]:w-[370px] h-[350px] " image="/pages/travel/grid-norway.jpg" title="Geiranger, Norway" href="" />
                <TravelDestinationGridCard className="min-[1200px]:top-[1008px] min-[1200px]:left-0 w-full md:w-1/2 mx-auto min-[1200px]:w-[761px] h-[314px] " image="/pages/travel/grid-sydney.jpg" title="Sydney, Australia" href="" />
                <TravelDestinationGridCard className="min-[1200px]:top-[390px] min-[1200px]:left-[391px] w-full md:w-1/2 mx-auto min-[1200px]:w-[370px] h-[597px] " image="/pages/travel/grid-tokyo.jpg" title="Tokyo, Japan" href="" />
                <TravelDestinationGridCard className="min-[1200px]:top-[390px] min-[1200px]:left-[782px] w-full md:w-1/2 mx-auto min-[1200px]:w-[370px] h-[312px] " image="/pages/travel/grid-istanbul.jpg" title="Istanbul, Turkey" href="" />
                <TravelDestinationGridCard className="min-[1200px]:top-[723px] min-[1200px]:left-[782px] w-full md:w-1/2 mx-auto min-[1200px]:w-[370px] h-[599px] " image="/pages/travel/grid-newyork.jpg" title="New York, USA" href="" />
            </div>
        </div>
    );
};

export default TravelDestinationGrid;

type TravelDestinationGridCardProps = {
    image: string;
    title?: string;
    href: string;
};
export const TravelDestinationGridCard: React.FC<React.HTMLAttributes<HTMLDivElement> & TravelDestinationGridCardProps> = ({ className, image, title, href, ...props }) => {
    const delay = Math.floor(Math.random() * 500);
    return (
        <AnimatedContainer delay={delay} visibleClass="!slide-in-from-top-0 zoom-in-75" className={cn('min-[1200px]:absolute relative overflow-hidden shadow-blue-card rounded-3xl lg:rounded-4xl', className)} {...props}>
            <div className="absolute inset-0 -z-1 bg-[linear-gradient(0deg,rgba(0,0,0,0.12)_0%,rgba(0,0,0,0.12)_100%)]"></div>
            <Image fill sizes="auto" className="object-cover -z-2" src={image} alt="Travel Destination Grid Card Image" />
            <div className="absolute inset-x-6 bottom-4 flex items-center justify-between">
                <span className="text-3xl font-semibold text-surface-0">{title}</span>
                <Link
                    href={href}
                    className="h-12 px-8 flex items-center justify-center rounded-full bg-white/12 hover:bg-white/16 transition-all border border-white/8 backdrop-blur-[6px] shadow-[0px_10px_10px_-8px_rgba(18,18,23,0.02),0px_2px_2px_-1.5px_rgba(18,18,23,0.02),0px_1px_1px_-0.5px_rgba(18,18,23,0.02)]"
                >
                    <i className="pi pi-arrow-right text-surface-0 text-lg"></i>
                </Link>
            </div>
        </AnimatedContainer>
    );
};
