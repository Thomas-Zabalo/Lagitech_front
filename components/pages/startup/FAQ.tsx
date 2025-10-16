import AnimatedContainer from '@/components/AnimatedContainer';
import QuestionsCommentsIcon from '@/components/icons/questions-comments.svg';
import { Accordion, AccordionItem } from '@/components/ui/accordion';
import Image from 'next/image';
const StartupFAQ = () => {
    return (
        <div className="container lg:max-w-[82rem] max-w-[28rem] mt-24 lg:mt-64">
            <div className="flex lg:flex-row flex-col items-start gap-16">
                <div className="flex-1">
                    <div className="icon-box ml-0">
                        <QuestionsCommentsIcon />
                    </div>
                    <h1 className="mt-10 text-3xl lg:text-5xl font-semibold text-surface-950 dark:text-surface-0 !leading-tight">
                        Frequently <br /> Asked Questions
                    </h1>
                    <p className="text-xl max-w-sm text-surface-500 dark:text-white/64 mt-6">Find quick answers to common questions about our SaaS platform.</p>
                    <Accordion className="mt-14">
                        {faqData.map((item, index) => (
                            <AccordionItem key={index} {...item} />
                        ))}
                    </Accordion>
                </div>
                <AnimatedContainer visibleClass="!slide-in-from-top-0 slide-in-from-right-24" className="relative w-full lg:flex-1 rounded-4xl bg-main-gradient shadow-blue-card h-[33rem] lg:h-[51rem]">
                    <Image fill sizes="auto" src={'/pages/startup/question-line.svg'} alt="Question Line" />
                    <Image className="absolute w-28 lg:w-44 bottom-10 lg:bottom-4 right-10 lg:right-20" width={0} height={0} sizes="99vw" src={'/pages/startup/question-mark.png'} alt="Question Mark" />
                    <Image className="absolute w-20 lg:w-24 top-[200px] lg:top-[332px] right-[15px] lg:right-[94px]" width={0} height={0} sizes="99vw" src={'/pages/startup/question-mark.png'} alt="Question Mark" />
                    <Image className="absolute w-24 lg:w-32 top-[20px] lg:top-[40px] right-[40px] lg:right-[116px]" width={0} height={0} sizes="99vw" src={'/pages/startup/question-mark.png'} alt="Question Mark" />
                    <Image className="absolute w-16 lg:w-20 top-[60px] lg:top-[109px] left-[90px] lg:left-[162px]" width={0} height={0} sizes="99vw" src={'/pages/startup/question-mark.png'} alt="Question Mark" />
                    <Image className="absolute w-20 lg:w-24 top-[240px] lg:top-[258px] left-[40px] lg:left-[64px]" width={0} height={0} sizes="99vw" src={'/pages/startup/question-mark.png'} alt="Question Mark" />
                    <Image className="absolute w-24 lg:w-36 top-[340px] lg:top-[420px] left-[80px]" width={0} height={0} sizes="99vw" src={'/pages/startup/question-mark.png'} alt="Question Mark" />
                </AnimatedContainer>
            </div>
        </div>
    );
};

export default StartupFAQ;

const faqData = [
    {
        title: 'What features does your SaaS platform offer?',
        content: 'Our platform offers a wide range of features including real-time collaboration, comprehensive dashboards, automated workflows, and robust security measures.'
    },
    {
        title: 'How secure is my data on your platform?',
        content: 'We prioritize data security by implementing end-to-end encryption, regular security audits, and strict access controls. Your data is stored in secure, compliant data centers.'
    },
    {
        title: 'Can I integrate your platform with other tools we use?',
        content: 'Yes, our platform supports integrations with various third-party applications through APIs and native connectors, allowing you to streamline your workflows and enhance productivity.'
    },
    {
        title: 'Do you offer customer support?',
        content: 'Absolutely! We provide 24/7 customer support through multiple channels, including live chat, email, and phone. Our dedicated support team is here to assist you whenever you need help.'
    }
];
