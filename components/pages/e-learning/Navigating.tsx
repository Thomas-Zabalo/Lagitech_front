import AnimatedContainer from '@/components/AnimatedContainer';
import FileFadeIcon from '@/components/icons/file-fade.svg';
import { Avatar } from '@/components/ui/avatar';
import Image from 'next/image';
const ELearningNavigating = () => {
    return (
        <div className="container mt-24 lg:mt-64">
            <div className="icon-box">
                <FileFadeIcon />
            </div>
            <h1 className="mt-10 text-3xl lg:text-5xl font-semibold text-surface-950 dark:text-surface-0 max-w-md !leading-tight text-center mx-auto">Navigating the Future of Education</h1>
            <p className="mt-6 text-lg text-surface-500 dark:text-white/64 max-w-lg mx-auto text-center">
                Explore cutting-edge educational trends, innovative teaching strategies, and emerging technologies shaping the future of learning across diverse disciplines.
            </p>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {navigatingData.map((item, index) => (
                    <AnimatedContainer key={index} delay={index * 300}>
                        <div className="w-full h-[15.5rem] rounded-2xl relative overflow-hidden">
                            <Image fill sizes="auto" className="object-cover" src={item.image} alt="Network Course Image" />
                        </div>
                        <div className="p-3 mt-4">
                            <h5 className="text-xl font-medium text-surface-950 dark:text-surface-0">{item.title}</h5>
                            <p className="mt-2 text-surface-500 dark:text-white/64">{item.description}</p>
                            <div className="flex items-center gap-3 mt-6">
                                <Avatar image={item.avatar} className="w-10 h-10" />
                                <div className="flex flex-col">
                                    <span className="font-medium text-surface-950 dark:text-surface-0">{item.name}</span>
                                    <span className="text-sm text-surface-500 dark:text-white/64">{item.job}</span>
                                </div>
                            </div>
                            <div className="my-5 w-full border-b border-surface-200 dark:border-white/24 border-dashed"></div>
                            <button className="flex items-center gap-2 justify-between px-4 py-2 w-full shadow-stroke dark:shadow-none border-0 dark:border border-white/12 rounded-full hover:bg-surface-100 dark:hover:bg-surface-800 transition-all">
                                <span>Learn More</span>
                                <i className="pi pi-arrow-right"></i>
                            </button>
                        </div>
                    </AnimatedContainer>
                ))}
            </div>
        </div>
    );
};

export default ELearningNavigating;

const navigatingData = [
    {
        image: '/pages/e-learning/navigating-course-1.jpg',
        title: 'Unlocking the Power of Big Data',
        description: 'Your Gateway to Data Science Introduction to Data Science Learn the fundamentals of data science and start deriving meaningful insights from large datasets.',
        avatar: '/avatars/male-3.jpg',
        name: 'David Chen',
        job: 'Teacher',
        to: ''
    },
    {
        image: '/pages/e-learning/navigating-course-2.jpg',
        title: 'Mastering the Digital Landscape',
        description: 'Essential Marketing Strategies for 2024 Digital Marketing Essentials Explore modern marketing strategies and strengthen your online brand presence.',
        avatar: '/avatars/female-5.jpg',
        name: 'Isabella Kim',
        job: 'Teacher',
        to: ''
    },
    {
        image: '/pages/e-learning/navigating-course-3.jpg',
        title: 'From Novice to Developer',
        description: 'Building Your First Website from Scratch Web Development Fundamentals Learn the basics of creating websites with HTML, CSS, and JavaScript.',
        avatar: '/avatars/male-2.jpg',
        name: 'James Wilson',
        job: 'Teacher',
        to: ''
    }
];
