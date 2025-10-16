import AnimatedContainer from '@/components/AnimatedContainer';
import Image from 'next/image';

const AgencyBlog = () => {
    return (
        <div className="container mt-24 lg:mt-64">
            <span className="text-xl font-semibold text-surface-950 dark:text-surface-0">Blog</span>
            <h1 className="mt-2 text-3xl lg:text-6xl font-semibold text-surface-950 dark:text-surface-0">Navigating the Future of Creativity</h1>
            <div className="mt-16 grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 gap-6">
                {agencyBlogData.map((item, index) => (
                    <AnimatedContainer key={index} delay={index * 400}>
                        <div className="h-64 rounded-2xl overflow-hidden relative">
                            <Image fill sizes="auto" className="object-cover" src={item.image} alt="Agency Blog Image" />
                        </div>
                        <div className="p-3 mt-4">
                            <h6 className="text-xl font-medium text-surface-950 dark:text-surface-0">{item.title}</h6>
                            <p className="mt-2 text-surface-500 dark:text-white/64">{item.description}</p>
                            <button className="w-full text-surface-950 dark:text-surface-0 hover:bg-surface-100 dark:hover:bg-surface-900 transition-colors mt-7 inline-flex items-center justify-between px-4 py-1 rounded-full shadow-stroke dark:shadow-none border-0 dark:border border-surface-700">
                                <span className="font-medium">Learn More</span>
                                <i className="pi pi-arrow-right text-sm"></i>
                            </button>
                        </div>
                    </AnimatedContainer>
                ))}
            </div>
        </div>
    );
};

export default AgencyBlog;

const agencyBlogData = [
    {
        title: 'Unlocking the Potential of Brand Identity',
        description: 'Discover strategic approaches and creative solutions to strengthen your brand identity.',
        image: '/pages/agency/blog-image-1.jpg',
        to: ''
    },
    {
        title: 'Mastering Digital Marketing Trends',
        description: "Explore 2024 digital marketing trends and enhance your brand's online presence.",
        image: '/pages/agency/blog-image-2.jpg',
        to: ''
    },
    {
        title: 'From Concept to Creation',
        description: 'Learn the fundamentals of turning creative ideas into reality through design processes.',
        image: '/pages/agency/blog-image-3.jpg',
        to: ''
    }
];
