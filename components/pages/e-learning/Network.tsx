import AnimatedContainer from '@/components/AnimatedContainer';
import BookIcon from '@/components/icons/book.svg';
import { Avatar } from '@/components/ui/avatar';
import Image from 'next/image';
const ELearningNetwork = () => {
    return (
        <div className="container mt-24 lg:mt-64">
            <div className="icon-box">
                <BookIcon />
            </div>
            <h1 className="mt-10 text-3xl lg:text-5xl font-semibold text-surface-950 dark:text-surface-0  max-w-sm text-center mx-auto">Expansive Learning Network</h1>
            <p className="mt-6 text-lg text-surface-500 dark:text-white/64 max-w-md mx-auto text-center">Discover a wide range of courses tailored to enhance your skills and knowledge across various disciplines.</p>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {networkData.map((item, index) => (
                    <AnimatedContainer key={index} delay={index * 400}>
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
                                    <span className="text-sm text-surface-500">{item.job}</span>
                                </div>
                            </div>
                            <div className="my-5 w-full border-b border-surface-200 dark:border-white/24 border-dashed"></div>
                            <div className="flex flex-wrap items-center justify-between gap-2">
                                <span className="font-medium text-surface-950 dark:text-surface-0 text-2xl">{item.price}</span>
                                <div className="flex items-center gap-4">
                                    <div className="h-8 px-4 shadow-stroke rounded-full inline-flex items-center gap-2 font-medium text-surface-950 dark:text-surface-0">
                                        <i className="pi pi-book text-sm"></i>
                                        {item.content_length}
                                    </div>
                                    <div className="h-8 px-4 shadow-stroke rounded-full inline-flex items-center gap-2 font-medium text-surface-950 dark:text-surface-0">
                                        <i className="pi pi-user text-sm"></i>
                                        {item.student_length}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </AnimatedContainer>
                ))}
            </div>
        </div>
    );
};

export default ELearningNetwork;

const networkData = [
    {
        image: '/pages/e-learning/network-course-1.jpg',
        title: 'Introduction to Data Science',
        description: 'Learn the fundamentals of data science and start deriving meaningful insights from large datasets.',
        avatar: '/avatars/male-1.jpg',
        name: 'Ethan Blackwood',
        job: 'Teacher',
        price: '$200',
        content_length: '40',
        student_length: '80'
    },
    {
        image: '/pages/e-learning/network-course-2.jpg',
        title: 'Digital Marketing Essentials',
        description: 'Explore modern marketing strategies and strengthen your online brand presence.',
        avatar: '/avatars/female-2.jpg',
        name: 'Luna Prescott',
        job: 'Teacher',
        price: '$132',
        content_length: '56',
        student_length: '72'
    },
    {
        image: '/pages/e-learning/network-course-3.jpg',
        title: 'Web Development Fundamentals',
        description: 'Learn the basics of creating websites with HTML, CSS, and JavaScript.',
        avatar: '/avatars/male-4.jpg',
        name: 'Jasper Holloway',
        job: 'Teacher',
        price: '$280',
        content_length: '36',
        student_length: '112'
    }
];
