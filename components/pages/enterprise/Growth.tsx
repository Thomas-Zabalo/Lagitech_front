import AnimatedContainer from '@/components/AnimatedContainer';
import CloudFadeIcon from '@/components/icons/cloud-fade.svg';
import Image from 'next/image';
const EnterpriseGrowth = () => {
    return (
        <div className="container mt-24 lg:mt-64">
            <div className="icon-box [&>svg]:h-9 [&>svg]:w-9 lg:[&>svg]:w-11 lg:[&>svg]:h-11">
                <CloudFadeIcon />
            </div>
            <h1 className="text-3xl lg:text-5xl text-surface-950 dark:text-surface-0 font-semibold max-w-xs lg:max-w-lg text-center mx-auto mt-10">Discover Your Data and Accelerate Growth</h1>
            <p className="mt-6 mx-auto max-w-lg text-center text-lg lg:text-xl text-surface-500 dark:text-white/64">
                Unlock the potential of your data. Support your business growth with deep insights and actionable information provided by our advanced analytics tools.
            </p>
            <div className="mt-16 flex lg:flex-row flex-col items-center gap-6">
                {enterpriseGrowthData.map((item, index) => (
                    <AnimatedContainer key={index} delay={index * 400} className="lg:flex-1 h-[32rem] max-w-[26rem] w-full relative rounded-3xl lg:rounded-4xl bg-main-gradient shadow-stroke">
                        <Image
                            className="h-[289px] w-auto max-w-none absolute top-[28px] left-1/2 -translate-x-1/2 [filter:drop-shadow(0px_2px_5px_0px_rgba(255,255,255,0.06)_inset,0px_12px_20px_0px_rgba(0,0,0,0.06))]"
                            width={0}
                            height={0}
                            sizes="100vw"
                            src={item.image}
                            alt="Growth Image"
                        />
                        <div className="absolute inset-x-8 bottom-8">
                            <h5 className="title text-xl">{item.title}</h5>
                            <p className="mt-4 text-white/64">{item.description}</p>
                        </div>
                    </AnimatedContainer>
                ))}
            </div>
        </div>
    );
};

export default EnterpriseGrowth;

const enterpriseGrowthData = [
    {
        title: 'Shape the Future with Data Analytics',
        description: 'Enhance business performance with quick real-time data tracking and analysis.',
        image: '/pages/enterprise/growth-img-1.png'
    },
    {
        title: 'Comprehensive Analytics',
        description: 'Create custom analytics dashboards tailored for your business needs and preferences.',
        image: '/pages/enterprise/growth-img-2.png'
    },
    {
        title: 'Intelligent Reporting Systems',
        description: 'Automate your reporting processes and save valuable time efficiently.',
        image: '/pages/enterprise/growth-img-3.png'
    }
];
