import React from 'react';
import FileFadeIcon from '@/components/icons/file-fade.svg';
import Link from 'next/link';
import Image from 'next/image';
import AnimatedContainer from '@/components/AnimatedContainer';
const EnterpriseInteraction = () => {
    return (
        <div className="container mt-24 lg:mt-64">
            <div className="icon-box">
                <FileFadeIcon />
            </div>
            <h1 className="text-3xl lg:text-5xl text-surface-950 dark:text-surface-0 font-semibold max-w-xs lg:max-w-md text-center mx-auto mt-10">Enhancing Customer Interaction</h1>
            <p className="mt-6 mx-auto max-w-lg text-center text-lg lg:text-xl text-surface-500 dark:text-white/64">Discover how modern businesses are optimizing their processes with technology.</p>
            <div className="mt-16 flex lg:flex-row flex-col items-center lg:items-start gap-6">
                {enterpriseInteractionData.map((item, index) => (
                    <AnimatedContainer key={index} delay={index * 400} className="flex-1 max-w-[26rem]">
                        <div className="h-[24.5rem] relative w-full bg-main-gradient rounded-3xl lg:rounded-4xl shadow-blue-card">
                            <Image className="absolute w-[85%] h-auto left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" sizes="100vw" width={0} height={0} src={item.image} alt="Interaction Image" />
                        </div>
                        <div className="p-6 mt-4">
                            <Link href={''} className="flex items-center gap-2 text-surface-950 dark:text-surface-0">
                                <span className="text-xl font-semibold flex-1">{item.title}</span>
                                <i className="pi pi-arrow-right"></i>
                            </Link>
                            <p className="text-lg text-surface-500 mt-3">{item.description}</p>
                        </div>
                    </AnimatedContainer>
                ))}
            </div>
        </div>
    );
};

export default EnterpriseInteraction;

const enterpriseInteractionData = [
    {
        title: 'Creating a Business Strategy Chart',
        description: 'Outline a wireframe for a comprehensive business strategy chart that includes key objectives, timelines, and milestones.',
        image: '/pages/enterprise/interaction-img-1.png'
    },
    {
        title: 'Scalable Tech Stack Diagram',
        description: 'Develop a wireframe for a scalable technology stack diagram showing the different layers and components involved.',
        image: '/pages/enterprise/interaction-img-2.png'
    },
    {
        title: 'Employee Training in the Digital Era',
        description: 'Create a wireframe for an employee training progress tracker that visualizes individual and team progress through various training modules.',
        image: '/pages/enterprise/interaction-img-3.png'
    }
];
