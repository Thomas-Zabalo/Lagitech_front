import { cn } from '@/lib/utils';
import React from 'react';
import Trimzales from '@/components/icons/customers/trimzales.svg';
import ZenTrailMs from '@/components/icons/customers/zentrailms.svg';
import Wavelength from '@/components/icons/customers/wavelength.svg';
import AlphaHex from '@/components/icons/customers/alphahex.svg';
import Mistranet from '@/components/icons/customers/mistranet.svg';
import BriteMank from '@/components/icons/customers/britemank.svg';
import Limerantz from '@/components/icons/customers/limerantz.svg';
import Streamlinz from '@/components/icons/customers/streamlinz.svg';
const floatingCustomersData = [
    {
        logo: Trimzales,
        label: 'Trimzales'
    },
    {
        logo: ZenTrailMs,
        label: 'ZenTrailMs'
    },
    {
        logo: Wavelength,
        label: 'Wavelength'
    },
    {
        logo: AlphaHex,
        label: 'AlphaHex'
    },
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
    }
];

type FloatingCustomersProps = {
    iconClass?: string;
    labelClass?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const FloatingCustomers: React.FC<FloatingCustomersProps> = ({ className, iconClass, labelClass, ...props }) => {
    return (
        <div className={cn('w-full flex flex-nowrap gap-6 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_white_128px,_white_calc(100%-128px),transparent_100%)] ', className)} {...props}>
            {Array(2)
                .fill(null)
                .map((_, i) => (
                    <div key={i} className="flex flex-nowrap items-center justify-center md:justify-start animate-infinite-scroll">
                        {floatingCustomersData.map((item, j) => (
                            <div key={j} className="w-44 flex items-center flex-nowrap justify-center h-auto gap-4">
                                <item.logo className={cn('fill-white/56 [&_path]:fill-white/56', iconClass)} />
                                <span className={cn('font-semibold text-white/56 text-lg', labelClass)}>{item.label}</span>
                            </div>
                        ))}
                    </div>
                ))}
        </div>
    );
};

export default FloatingCustomers;
