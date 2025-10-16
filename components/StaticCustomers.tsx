import { cn } from '@/lib/utils';
import React from 'react';
import Trimzales from '@/components/icons/customers/trimzales.svg';
import Mistranet from '@/components/icons/customers/mistranet.svg';
import BriteMank from '@/components/icons/customers/britemank.svg';
import Limerantz from '@/components/icons/customers/limerantz.svg';
import Streamlinz from '@/components/icons/customers/streamlinz.svg';
import AnimatedContainer from './AnimatedContainer';
const staticCustomersData = [
    {
        logo: Mistranet,
        label: 'Mistranet'
    },
    {
        logo: BriteMank,
        label: 'BriteMank'
    },
    {
        logo: Limerantz,
        label: 'Limerantz'
    },
    {
        logo: Streamlinz,
        label: 'Streamlinz'
    },
    {
        logo: Trimzales,
        label: 'Trimzales'
    }
];

type StaticCustomersProps = {
    iconClass?: string;
    labelClass?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const StaticCustomers: React.FC<StaticCustomersProps> = ({ className, iconClass, labelClass, ...props }) => {
    return (
        <div className={cn('grid grid-cols-1 sm:grid-cols-2 grid-rows-2 lg:grid-cols-5 items-center gap-4 justify-between w-full', className)} {...props}>
            {staticCustomersData.map((item, index) => (
                <AnimatedContainer key={index} delay={150 * index} className="py-7 rounded-3xl shadow-stroke inline-flex items-center justify-center gap-4 dark:shadow-none border-0 dark:border border-white/12">
                    <item.logo className={cn('fill-surface-500 [&_path]:fill-surface-500 dark:fill-white/64 dark:[&_path]:fill-white/64', iconClass)} />
                    <span className={cn('text-surface-500 dark:text-white/64 text-lg font-semibold', labelClass)}>{item.label}</span>
                </AnimatedContainer>
            ))}
        </div>
    );
};

export default StaticCustomers;
