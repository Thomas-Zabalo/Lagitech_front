import AnimatedContainer from '@/components/AnimatedContainer';
import CloudFadeIcon from '@/components/icons/cloud-fade.svg';
import Image from 'next/image';

const StartupAnalytics = () => {
    return (
        <div className="container mt-24 lg:mt-64">
            <div className="icon-box [&>svg]:h-9 [&>svg]:w-9 lg:[&>svg]:w-11 lg:[&>svg]:h-11">
                <CloudFadeIcon />
            </div>
            <h1 className="text-3xl lg:text-5xl text-surface-950 dark:text-surface-0 font-semibold max-w-xs lg:max-w-lg text-center mx-auto mt-10">Unlock Growth with Powerful Analytics</h1>
            <p className="mt-6 mx-auto max-w-lg text-center text-lg lg:text-xl text-surface-500 dark:text-white/64">Unlock the potential of your data with our tools, offering deep insights and actionable information for growth.</p>
            <div className="mt-14 flex lg:flex-row flex-col items-center gap-6">
                <AnimatedContainer className="lg:flex-1 overflow-hidden rounded-3xl lg:rounded-4xl bg-main-gradient relative h-[33rem] w-full max-w-[27rem]">
                    <Image
                        className="absolute max-w-none w-auto h-[289px] top-[24px] lg:top-[28px] left-[24px] lg:left-[28px] [filter:drop-shadow(0px_2px_5px_0px_rgba(255,255,255,0.06)_inset,0px_12px_20px_0px_rgba(0,0,0,0.06))]"
                        width={0}
                        height={0}
                        sizes="100vw"
                        src={'/pages/startup/analytic-img-1.png'}
                        alt="Analytic Card Image"
                    />
                    <div className="absolute inset-x-7 lg:inset-x-8 bottom-8">
                        <h5 className="text-xl title">Real-Time Data Monitoring</h5>
                        <p className="mt-4 text-white/64">Keep track of your key metrics and performance indicators in real-time for proactive</p>
                    </div>
                </AnimatedContainer>
                <AnimatedContainer delay={400} className="lg:flex-1 overflow-hidden rounded-3xl lg:rounded-4xl bg-main-gradient relative h-[33rem] w-full max-w-[27rem]">
                    <Image className="absolute max-w-none h-[340px] w-auto top-0 left-[24px] lg:left-[28px]" width={0} height={0} sizes="100vw" src={'/pages/startup/analytic-img-2.png'} alt="Analytic Card Image" />
                    <div className="absolute inset-x-7 lg:inset-x-8 bottom-8">
                        <h5 className="text-xl title">Customizable Dashboards</h5>
                        <p className="mt-4 text-white/64">Tailor your dashboard to display the most relevant data for your business needs and preferences.</p>
                    </div>
                </AnimatedContainer>
                <AnimatedContainer delay={800} className="lg:flex-1 overflow-hidden rounded-3xl lg:rounded-4xl bg-main-gradient relative h-[33rem] w-full max-w-[27rem]">
                    <Image
                        className="absolute max-w-none h-[289px] w-auto top-[24px] lg:top-[28px] left-[24px] lg:left-[28px] [filter:drop-shadow(0px_2px_5px_0px_rgba(255,255,255,0.06)_inset,0px_12px_20px_0px_rgba(0,0,0,0.06))]"
                        width={438}
                        height={289}
                        src={'/pages/startup/analytic-img-3.png'}
                        alt="Analytic Card Image"
                    />
                    <div className="absolute inset-x-7 lg:inset-x-8 bottom-8">
                        <h5 className="text-xl title">Automated Reporting</h5>
                        <p className="mt-4 text-white/64">Generate detailed reports automatically to save time and gain valuable insights manual effort.</p>
                    </div>
                </AnimatedContainer>
            </div>
        </div>
    );
};

export default StartupAnalytics;
