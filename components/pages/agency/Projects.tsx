import AnimatedContainer from '@/components/AnimatedContainer';
import Image from 'next/image';

const AgencyProjects = () => {
    return (
        <div className="container mt-24 lg:mt-64">
            <div>
                <span className="text-xl font-semibold text-surface-950 dark:text-surface-0">Our Work</span>
                <h1 className="mt-2 text-3xl lg:text-6xl font-semibold text-surface-950 dark:text-surface-0">Projects and Success Stories</h1>
                <div className="mt-16 relative h-[35rem] rounded-4xl shadow-blue-card overflow-hidden">
                    <Image fill sizes="auto" className="object-cover" src="/pages/agency/projects-hero-image.jpg" alt="Agency Projects Hero Image" />
                </div>
                <div className="flex items-center gap-4 justify-between mt-10">
                    <h5 className="text-xl lg:text-3xl font-semibold text-surface-950 dark:text-surface-0">Innovative Rebranding for Urban Style</h5>
                    <span className="text-xl font-medium text-surface-950 dark:text-surface-0">Logo & Branding</span>
                </div>
                <div className="mt-4 text-xl text-surface-500 dark:text-white/64 font-medium">UrbanWear</div>
            </div>
            <div className="flex flex-col gap-24 lg:gap-36 mt-28">
                {agencyProjectsData.map((item, index) => (
                    <AnimatedContainer key={index} className="flex items-center lg:flex-row flex-col even:flex-col lg:even:flex-row-reverse gap-10">
                        <div className="lg:flex-1 w-full h-[35rem] rounded-4xl shadow-blue-card overflow-hidden relative">
                            <Image fill sizes="auto" className="object-cover" src={item.image} alt="Agency Project Image" />
                        </div>
                        <div className="w-full lg:flex-1 flex flex-col justify-between gap-4 lg:min-h-[31rem] h-full">
                            <div className="flex flex-col gap-4">
                                <h5 className="text-3xl font-semibold text-surface-950 dark:text-surface-0">{item.title}</h5>
                                <span className="text-xl font-medium text-surface-500 dark:text-white/64">{item.subtitle}</span>
                            </div>
                            <div className="flex flex-col gap-2 text-xl text-surface-950 dark:text-surface-0">
                                <span>Services</span>
                                <span>{item.services}</span>
                            </div>
                        </div>
                    </AnimatedContainer>
                ))}
            </div>
        </div>
    );
};

export default AgencyProjects;

const agencyProjectsData = [
    {
        title: 'Innovative Rebranding for Urban Style',
        subtitle: 'UrbanWear',
        services: 'Logo & Branding',
        image: '/pages/agency/project-image-1.jpg'
    },
    {
        title: 'Revolutionizing Online Presence',
        subtitle: 'TechSphere',
        services: 'Web Design, Development',
        image: '/pages/agency/project-image-2.jpg'
    },
    {
        title: 'Crafting a Visual Identity',
        subtitle: 'GreenEarth',
        services: 'Logo & Branding, Illustration',
        image: '/pages/agency/project-image-3.jpg'
    },
    {
        title: 'Digital Transformation in Retail',
        subtitle: 'ShopEase',
        services: 'Web Design, Development, Mobile App',
        image: '/pages/agency/project-image-4.jpg'
    }
];
