import AnimatedContainer from '@/components/AnimatedContainer';
import { cn } from '@/lib/utils';
import React from 'react';

const StartupContact = () => {
    return (
        <div className="container mt-24 lg:mt-64 pb-24 lg:pb-16">
            <div className="relative max-w-xl mx-auto lg:max-w-none px-10 pt-10 pb-40 lg:p-20 rounded-3xl lg:rounded-4xl bg-main-gradient mb-96 lg:mb-56">
                <div className="lg:w-1/2">
                    <h1 className="title lg:text-6xl text-3xl !leading-tight">Ready to Transform Your Business?</h1>
                    <p className="text-lg lg:text-xl text-white/64 mt-4">Join us today and start leveraging our innovative solutions to drive growth and achieve your goals.</p>
                </div>
                <AnimatedContainer className="h-0 mt-10 lg:mt-0 lg:absolute lg:top-14 lg:right-14">
                    <form className="space-y-4 max-w-lg mx-auto lg:w-[32rem]  p-6 lg:p-8 rounded-3xl lg:rounded-4xl shadow-blue-card dark:shadow-black-card bg-surface-0 dark:bg-surface-900">
                        <div className="flex items-start gap-6">
                            <div className="flex-1 flex flex-col gap-2">
                                <label className="font-medium text-surface-500">First Name</label>
                                <Input />
                            </div>
                            <div className="flex-1 flex flex-col gap-2">
                                <label className="font-medium text-surface-500">Last Name</label>
                                <Input />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-medium text-surface-500">Email Address</label>
                            <Input />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-medium text-surface-500">Phone Number</label>
                            <Input />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-medium text-surface-500">Message</label>
                            <Textarea />
                        </div>
                        <button className="button-gradient w-full h-14" type="submit">
                            Submit
                        </button>
                    </form>
                </AnimatedContainer>
            </div>
        </div>
    );
};

export default StartupContact;

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({ className, ...props }) => {
    return <input className={cn('w-full shadow-stroke rounded-full py-1 px-4 min-h-10 bg-transparent outline-none dark:bg-surface-950', className)} {...props} />;
};

const Textarea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>> = ({ className, rows = 4, ...props }) => {
    return <textarea rows={rows} className={cn('w-full shadow-stroke rounded-2xl p-3 min-h-10 resize-none bg-transparent outline-none dark:bg-surface-950', className)} {...props} />;
};
