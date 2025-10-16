import React from 'react';
import QuestionsCommentsIcon from '@/components/icons/questions-comments.svg';
import { Accordion, AccordionItem } from '@/components/ui/accordion';
import AnimatedContainer from '@/components/AnimatedContainer';
const ELearningFAQ = () => {
    return (
        <div className="container mt-24 lg:mt-64">
            <div className="icon-box">
                <QuestionsCommentsIcon />
            </div>
            <h1 className="mt-10 text-3xl lg:text-5xl font-semibold text-surface-950 dark:text-surface-0 max-w-2xl !leading-tight text-center mx-auto">Classroom Compass Navigating Modern Education</h1>
            <p className="mt-6 text-lg text-surface-500 dark:text-white/64 max-w-lg mx-auto text-center">Explore key educational concepts, from testing to technology, for students, teachers, and parents.</p>
            <Accordion className="max-w-[57rem] mt-16 mx-auto">
                {faqData.map((item, index) => (
                    <AnimatedContainer key={index} delay={index * 100}>
                        <AccordionItem {...item} />
                    </AnimatedContainer>
                ))}
            </Accordion>
        </div>
    );
};

export default ELearningFAQ;

const faqData = [
    {
        title: 'What is the purpose of standardized testing?',
        content: 'To assess student performance across schools and districts uniformly.'
    },
    {
        title: 'How does project-based learning benefit students?',
        content: 'Project-based learning encourages critical thinking, collaboration, and problem-solving, helping students apply theoretical knowledge to real-world situations.'
    },
    {
        title: 'What is the importance of early childhood education?',
        content: 'Early childhood education lays the foundation for lifelong learning and development, helping children acquire basic cognitive, social, and emotional skills.'
    },
    {
        title: 'How can technology enhance classroom learning?',
        content: 'Technology can personalize learning, increase engagement, and provide access to a wide range of educational resources, making learning more interactive and effective.'
    }
];
