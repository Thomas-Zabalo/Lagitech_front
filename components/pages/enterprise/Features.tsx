import React from 'react';
import MagicBoxFadeIcon from '@/components/icons/magic-box-fade.svg';
import ServerBoxIcon from '@/components/icons/server-box.svg';
import CloudBoxIcon from '@/components/icons/cloud-box.svg';
import BrainBoxIcon from '@/components/icons/brain-box.svg';
import CryptoBoxIcon from '@/components/icons/crypto-box.svg';
import LifeBodyBoxIcon from '@/components/icons/life-body-box.svg';
import ServerCloudBoxIcon from '@/components/icons/server-cloud-box.svg';
import AnimatedContainer from '@/components/AnimatedContainer';
const EnterpriseFeatures = () => {
    return (
        <div className={`container lg:mt-40 mt-24`}>
            <div className="icon-box">
                <MagicBoxFadeIcon />
            </div>
            <h1 className="text-3xl lg:text-5xl text-surface-950 dark:text-surface-0 font-semibold max-w-xs lg:max-w-lg text-center mx-auto mt-10">Simplify Your Work with Our Standout Features</h1>
            <p className="mt-6 mx-auto max-w-md text-center text-lg lg:text-xl text-surface-500 dark:text-white/64">Enhance your business processes and maximize efficiency with our enterprise-grade solutions.</p>
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {enterpriseFeaturesData.map((item, index) => (
                    <AnimatedContainer key={index} delay={index * 200} className={`p-8 border-0 dark:border border-white/12 shadow-stroke dark:shadow-none rounded-4xl`}>
                        <div className="icon-box ml-0">
                            <item.icon />
                        </div>
                        <h5 className="text-2xl text-surface-950 dark:text-surface-0 font-semibold mt-10">{item.title}</h5>
                        <p className="mt-6 text-lg text-surface-500">{item.description}</p>
                    </AnimatedContainer>
                ))}
            </div>
        </div>
    );
};

export default EnterpriseFeatures;

const enterpriseFeaturesData = [
    {
        icon: ServerBoxIcon,
        title: 'Advanced Data Analytics',
        description: 'Gain insights into your business operations and make effective data-driven decisions.'
    },
    {
        icon: CloudBoxIcon,
        title: 'Scalable Cloud Solutions',
        description: 'Grow and adapt with our scalable and secure cloud infrastructure for enterprises.'
    },
    {
        icon: BrainBoxIcon,
        title: 'Integrated ERP Systems',
        description: 'Streamline your processes with integrated ERP systems designed to boost productivity.'
    },
    {
        icon: CryptoBoxIcon,
        title: 'Robust Security Measures',
        description: 'Protect your enterprise with advanced security features ensuring data safety.'
    },
    {
        icon: LifeBodyBoxIcon,
        title: '24/7 Customer Support',
        description: 'Access our dedicated support team around the clock for any issues or questions.'
    },
    {
        icon: ServerCloudBoxIcon,
        title: 'Customizable Solutions',
        description: 'Tailor our solutions to meet the specific needs of your business efficiently.'
    }
];
