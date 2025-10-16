import AnimatedContainer from '@/components/AnimatedContainer';
import DeliveryTruck from '@/components/icons/delivery-truck.svg';
import Parcel from '@/components/icons/parcel.svg';
import Planes from '@/components/icons/planes.svg';
import Ship from '@/components/icons/ship.svg';
import Warehouse from '@/components/icons/warehouse.svg';
import Wholesaler from '@/components/icons/wholesaler.svg';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
const logisticServicesData = [
    {
        icon: Ship,
        title: 'Ocean Freight',
        description: 'Optimize your supply chain with our reliable ocean freight services. We ensure timely and efficient delivery of your goods across the globe, with comprehensive tracking and customs clearance support.',
        to: ''
    },
    {
        icon: DeliveryTruck,
        title: 'Land Freight',
        description: 'Enhance your logistics operations with our robust land freight solutions. We offer flexible and cost-effective transportation options for your goods, ensuring safe and timely delivery.',
        to: ''
    },
    {
        icon: Planes,
        title: 'Air Freight',
        description: 'Experience fast and secure air freight services with us. We provide expedited shipping solutions, handling everything from small parcels to large cargo, ensuring your goods reach their destination quickly.',
        to: ''
    },
    {
        icon: Warehouse,
        title: 'Warehousing',
        description: 'Secure and manage your inventory with our state-of-the-art warehousing solutions. Our facilities are equipped with the latest technology to ensure the safety and efficiency of your storage needs.',
        to: ''
    },
    {
        icon: Wholesaler,
        title: 'Storage Solutions',
        description: 'Optimize your inventory management with our comprehensive storage solutions. We offer both short-term and long-term storage options, ensuring your goods are well-protected and easily accessible.',
        to: ''
    },
    {
        icon: Parcel,
        title: 'Freight Forwarding',
        description: 'Simplify your logistics with our expert transport services. We handle documentation, customs clearance, and delivery to ensure a smooth, efficient process.',
        to: ''
    }
];

const LogisticServices: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => {
    return (
        <div className={cn('container relative mt-64', className)} {...props}>
            <div className=" h-[45rem] absolute left-2 right-2 rounded-4xl shadow-black-card overflow-hidden">
                <div className="absolute inset-0 -z-1 bg-[linear-gradient(180deg,rgba(0,0,0,0.48)_0%,rgba(0,0,0,0.48)_49%,rgba(0,0,0,0.10)_100%)]" />
                <Image fill sizes="auto" className="object-cover -z-2 left-0" src="/pages/logistic/services-background.jpg" alt="Logistic Services Image" />
            </div>
            <div className="pt-20">
                <div className="max-w-lg sm:mx-auto mx-10">
                    <h1 className="text-3xl lg:text-5xl font-semibold text-surface-0">Optimize Your Supply Chain with Confidence</h1>
                    <p className="mt-6 text-white/72 text-lg">Utilize our advanced logistics solutions to streamline your supply chain and enhance efficiency.</p>
                </div>
                <div className="mt-16 relative z-1 max-w-[70rem] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px mx-auto shadow-blue-card dark:shadow-black-card dark:bg-surface-800 bg-surface-200 rounded-4xl overflow-hidden">
                    {logisticServicesData.map((item, index) => (
                        <AnimatedContainer key={index} delay={index * 200} visibleClass="!slide-in-from-top-0" className="flex flex-col p-8 bg-surface-0 dark:bg-surface-950">
                            <div className="bg-main-gradient w-16 h-16 rounded-full flex items-center justify-center shadow-blue-card">
                                <item.icon />
                            </div>
                            <h4 className="text-2xl text-surface-950 dark:text-surface-0 font-semibold mt-6">{item.title}</h4>
                            <p className="flex-1 text-surface-500 dark:text-white/64 mt-4">{item.description}</p>
                            <Link href={''} className="flex items-center justify-between gap-6 mt-6 cursor-pointer group ">
                                <span className="flex-1 text-surface-950 dark:text-surface-0 font-medium">Read More</span>
                                <i className="pi pi-arrow-right group-hover:translate-x-4 transition-all"></i>
                            </Link>
                        </AnimatedContainer>
                    ))}
                </div>
            </div>
            <div>
                <Image className="w-full h-auto max-w-[72rem] mx-auto" src="/pages/logistic/services-containers.png" alt="Logistic Services Containers Image" width={0} height={0} sizes="100vw" />
            </div>
        </div>
    );
};

export default LogisticServices;
