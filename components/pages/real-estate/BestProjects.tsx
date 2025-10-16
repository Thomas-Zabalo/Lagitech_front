import AnimatedContainer from '@/components/AnimatedContainer';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

const realEstateBestProjectsData = [
    {
        image: '/pages/real-estate/best-project-1.jpg',
        title: 'We have been serving our  ',
        description: 'We have been serving our valued clients for over 20 years, providing expert guidance and support in all aspects of real estate.'
    },
    {
        image: '/pages/real-estate/best-project-2.jpg',
        title: 'Discover Your Dream Home',
        description: 'Explore a wide range of properties that suit every budget and lifestyle, making your home-buying journey easier and more enjoyable.'
    },
    {
        image: '/pages/real-estate/best-project-3.jpg',
        title: 'Investment Opportunities',
        description: 'Unlock lucrative real estate investment opportunities that offer great returns, supported by our expert team of professionals.'
    }
];

type RealEstateBestProjectItemProps = {
    image: string;
    title: string;
    description: string;
};

type RealEstateBestProjectsProps = {
    items?: RealEstateBestProjectItemProps[];
};

const RealEstateBestProjects: React.FC<React.HTMLAttributes<HTMLDivElement> & RealEstateBestProjectsProps> = ({ className, items, ...props }) => {
    return (
        <div className={cn('mt-24 lg:mt-64 container', className)} {...props}>
            <div className="w-full flex flex-wrap items-start justify-between gap-6">
                <h1 className="max-w-[36rem] text-3xl lg:text-6xl font-semibold text-surface-950 dark:text-surface-0 leading-tight">The Best Project That We’ve Completed</h1>
                <div className="max-w-[34rem] ">
                    <p className="text-lg text-surface-500 dark:text-white/64">
                        Our most notable achievement to date is the successful completion of a state-of-the-art residential complex in downtown Cityville. This project stands as a testament to our commitment to excellence and innovation in real
                        estate development.
                    </p>
                    <button className="mt-6 button-gradient">
                        Learn More
                        <i className="pi pi-arrow-right text-sm"></i>
                    </button>
                </div>
            </div>
            <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-6">
                {(items ?? realEstateBestProjectsData).map((item, index) => (
                    <AnimatedContainer key={index} delay={index * 200}>
                        <div className="group relative h-[34rem] rounded-3xl overflow-hidden shadow-blue-card dark:shadow-none border-0 dark:border border-white/12">
                            <Image fill sizes="auto" className="object-cover -z-2" src={item.image} alt="Real Estate Partner Image" />
                            <div className="-z-1 inset-0 absolute opacity-50 group-hover:opacity-100 bg-[linear-gradient(180deg,rgba(0,0,0,0.00)_0%,rgba(0,0,0,0.48)_64.82%)] transition-all duration-300" />
                            <div className="group-hover:bottom-0 bottom-0 sm:-bottom-full absolute z-1 left-0 right-0 p-8 bg-surface-0 dark:bg-surface-950 rounded-t-3xl transition-all duration-300">
                                <Link href={''} className="flex items-center justify-between gap-2">
                                    <h5 className="text-lg font-semibold text-surface-950 dark:text-surface-0">{item.title}</h5>
                                    <i className="pi pi-arrow-right text-sm"></i>
                                </Link>
                                <p className="mt-3 text-surface-500 dark:text-white/64">{item.description}</p>
                            </div>
                        </div>
                    </AnimatedContainer>
                ))}
                <div className="rela"></div>
            </div>
        </div>
    );
};

export default RealEstateBestProjects;
