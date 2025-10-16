'use client';
import AnimatedContainer from '@/components/AnimatedContainer';
import Carousel, { CarouselItem } from '@/components/carousels/Carousel';
import TextFadeIcon from '@/components/icons/text-fade.svg';
import useIsMobile from '@/lib/hooks/use-is-mobile';
import Image from 'next/image';
import Link from 'next/link';
const ELearningTeachers = () => {
    const isMobile = useIsMobile();
    return (
        <div className="mt-24 lg:mt-64">
            <div className="icon-box [&>svg]:w-9 [&>svg]:h-9 lg:[&>svg]:w-11 lg:[&>svg]:h-11">
                <TextFadeIcon />
            </div>
            <h1 className="px-4 text-3xl lg:text-5xl font-semibold text-surface-950 dark:text-surface-0 leading-tight mt-10 mx-auto max-w-xl text-center">Classroom Chronicles Voices from the Chalk Line</h1>
            <p className="px-4 text-xl text-surface-500 dark:text-white/64 mt-6 max-w-2xl text-center mx-auto">
                Explore modern education through candid conversations with passionate teachers, highlighting innovative strategies across diverse subjects.
            </p>
            <div className="mt-24">
                <Carousel size={isMobile ? '75%' : '20%'} height="27rem" hideMask={isMobile ? true : false} options={{ loop: true, slidesToScroll: isMobile ? 1 : 3 }}>
                    {elearningTeachersData.map((item, index) => (
                        <CarouselItem key={index} className=" w-full h-full">
                            <AnimatedContainer key={index} delay={200 * index} className="w-full h-full lg:w-64 rounded-3xl shadow-stroke dark:shadow-black-card border-0 dark:border border-white/12 relative overflow-hidden">
                                <div className="flex flex-col h-full items-center">
                                    <div className="w-full flex-1 h-[80%] relative block">
                                        <Image fill sizes="auto" className="object-contain bottom-0" src={item.image} alt="E-learning Teacher Image" />
                                        <div className="z-2 absolute inset-x-0 bottom-0 h-11 bg-[linear-gradient(180deg,rgba(255,255,255,0.00)_0%,#FFF_100%)] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.00)_0%,rgb(var(--surface-950))_100%)]"></div>
                                    </div>
                                    <div className="p-6">
                                        <h5 className="font-semibold text-surface-950 dark:text-surface-0 text-center">{item.name}</h5>
                                        <p className="mt-1 text-sm text-surface-500 dark:text-white/64 text-center w-fit mx-auto">{item.job}</p>
                                        <div className="mt-4 flex items-center gap-2">
                                            <Link
                                                href={item.youtube}
                                                className="h-8 flex items-center justify-center flex-1 px-4 rounded-full shadow-stroke dark:shadow-black-card  border-0 dark:border border-white/12 hover:bg-surface-100 dark:hover:bg-surface-800 transition-all"
                                            >
                                                <i className="pi pi-youtube leading-none text-sm"></i>
                                            </Link>
                                            <Link
                                                href={item.twitter}
                                                className="h-8 flex items-center justify-center flex-1 px-4 rounded-full shadow-stroke dark:shadow-black-card border-0 dark:border border-white/12 hover:bg-surface-100 dark:hover:bg-surface-800 transition-all"
                                            >
                                                <i className="pi pi-twitter leading-none text-sm"></i>
                                            </Link>
                                            <Link
                                                href={item.discord}
                                                className="h-8 flex items-center justify-center flex-1 px-4 rounded-full shadow-stroke dark:shadow-black-card  border-0 dark:border border-white/12 hover:bg-surface-100 dark:hover:bg-surface-800 transition-all"
                                            >
                                                <i className="pi pi-discord leading-none text-sm"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedContainer>
                        </CarouselItem>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default ELearningTeachers;

const elearningTeachersData = [
    {
        name: 'Michael Brown',
        job: 'History Teacher',
        image: '/pages/e-learning/micheal.png',
        youtube: '',
        twitter: '',
        discord: ''
    },
    {
        name: 'Sarah Thompson',
        job: 'Mathematics Teacher',
        image: '/pages/e-learning/sarah.png',
        youtube: '',
        twitter: '',
        discord: ''
    },
    {
        name: 'Ava Nguyen',
        job: 'Physical Education Teacher',
        image: '/pages/e-learning/ava.png',
        youtube: '',
        twitter: '',
        discord: ''
    },
    {
        name: 'Olivia Garcia',
        job: 'English Language Teacher',
        image: '/pages/e-learning/olivia.png',
        youtube: '',
        twitter: '',
        discord: ''
    },
    {
        name: 'Emma Watson',
        job: 'Science Teacher',
        image: '/pages/e-learning/emma.png',
        youtube: '',
        twitter: '',
        discord: ''
    },
    {
        name: 'Ava Nguyen',
        job: 'Physical Education Teacher',
        image: '/pages/e-learning/ava.png',
        youtube: '',
        twitter: '',
        discord: ''
    },
    {
        name: 'Olivia Garcia',
        job: 'English Language Teacher',
        image: '/pages/e-learning/olivia.png',
        youtube: '',
        twitter: '',
        discord: ''
    }
];
