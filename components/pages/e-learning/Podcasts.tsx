import FileFadeIcon from '@/components/icons/file-fade.svg';
import Image from 'next/image';

import AnimatedContainer from '@/components/AnimatedContainer';
import ELearningPodcastPlayer from './PodcastPlayer';
const ELearningPodcasts = () => {
    return (
        <div className="container mt-24 lg:mt-64">
            <div className="icon-box">
                <FileFadeIcon />
            </div>
            <h1 className="mt-10 text-3xl lg:text-5xl font-semibold text-surface-950 dark:text-surface-0 max-w-md !leading-tight text-center mx-auto">Navigating the Future of Education</h1>
            <p className="mt-6 text-lg text-surface-500 dark:text-white/64 max-w-lg mx-auto text-center">
                Explore cutting-edge educational trends, innovative teaching strategies, and emerging technologies shaping the future of learning across diverse disciplines.
            </p>
            <div className="flex flex-col gap-16 mt-16 max-w-[60rem] mx-auto">
                {podcastsData.map((item, index) => (
                    <AnimatedContainer key={index} visibleClass="!slide-in-from-top-0 slide-in-from-left-24" delay={index * 200} className="flex md:flex-row flex-col items-start gap-5">
                        <div className="w-full md:w-56 h-56 md:aspect-square relative rounded-2xl overflow-hidden shadow-black-card">
                            <Image className="object-cover" fill sizes="auto" src={item.image} alt="Podcast Image" />
                        </div>
                        <div className="mt-2 flex-1">
                            <span className="badge h-8">{item.badge}</span>
                            <h5 className="mt-3 text-2xl font-semibold text-surface-950 dark:text-surface-0">{item.title}</h5>
                            <p className="mt-3 text-lg text-surface-500 dark:text-white/64">{item.description}</p>
                            <ELearningPodcastPlayer />
                        </div>
                    </AnimatedContainer>
                ))}
            </div>
        </div>
    );
};

export default ELearningPodcasts;

const podcastsData = [
    {
        image: '/pages/e-learning/podcast-1.jpg',
        badge: 'Education',
        title: 'EduTech Talks',
        description: 'We explore how technology is reshaping education systems and what classrooms of the future might look like'
    },
    {
        image: '/pages/e-learning/podcast-2.jpg',
        badge: 'Education',
        title: 'Learning Journey',
        description: 'We discuss the benefits of learning at any age and the significance of continuous education for personal growth.'
    },
    {
        image: '/pages/e-learning/podcast-3.jpg',
        badge: 'Education',
        title: 'Education Equity',
        description: 'We examine the barriers to educational equity and explore innovative solutions being developed to overcome these challenges.'
    }
];
