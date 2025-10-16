import React from 'react';
import Footer from './Footer';
import { cn } from '@/lib/utils';
import CirclePattern from './CirclePattern';
import { Avatar } from './ui/avatar';
import AnimatedContainer from './AnimatedContainer';

const FooterWithCTA: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => {
    return (
        <AnimatedContainer>
            <Footer className={cn('relative rounded-3xl lg:rounded-[3rem]', className)} {...props}>
                <CirclePattern className="absolute -top-1/2 left-1/2 -translate-x-1/2 translate-y-[36rem] lg:-translate-y-[5.5rem] rotate-180 w-[50rem] lg:w-[82rem] opacity-40 " />
                <div className="mb-20 pb-36 pt-16 flex items-center justify-center border-b border-white/10 border-dashed ">
                    <div className="max-w-[34rem] mx-auto">
                        <h1 className="title text-4xl lg:text-6xl font-semibold text-center !leading-tight">
                            Begin Your <br /> Free Trial Today
                        </h1>
                        <p className="text-lg lg:text-xl text-white/64 text-center max-w-[25rem] mx-auto mt-6">Experience the full power of our SaaS platform with a risk-free trial and see how it can transform your business.</p>
                        <button className="mt-10 button-regular mx-auto">Get Started</button>
                    </div>
                </div>
                <div className="lg:block hidden absolute left-60 top-40">
                    <span className="absolute w-[110%] aspect-square left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-full backdrop-blur-[2px] bg-white/4 z-10" />
                    <Avatar image="/avatars/male-1.jpg" className=" w-10 h-10 backdrop-blur-lg " />
                </div>
                <Avatar image="/avatars/male-4.jpg" className="lg:block hidden absolute top-72 left-48 backdrop-blur-lg " />
                <div className="lg:block hidden absolute left-[22rem] top-[28rem]">
                    <span className="absolute w-[110%] aspect-square left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-full backdrop-blur-[2px] bg-white/4 z-10" />
                    <Avatar image="/avatars/female-4.jpg" className=" w-12 h-12 backdrop-blur-lg " />
                </div>
                <div className="lg:block hidden absolute left-[calc(100%-24rem)] top-[26rem]">
                    <span className="absolute w-[110%] aspect-square left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-full backdrop-blur-[2px] bg-white/4 z-10" />
                    <Avatar image="/avatars/female-6.jpg" className=" w-14 h-14 backdrop-blur-lg " />
                </div>
                <Avatar image="/avatars/female-7.jpg" className="lg:block hidden absolute top-64 left-[calc(100%-15rem)] backdrop-blur-lg " />
                <div className="lg:block hidden absolute left-[calc(100%-16rem)] top-36">
                    <span className="absolute w-[110%] aspect-square left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 rounded-full backdrop-blur-[2px] bg-white/4 z-10" />
                    <Avatar image="/avatars/male-5.jpg" className=" w-10 h-10 backdrop-blur-lg " />
                </div>
            </Footer>
        </AnimatedContainer>
    );
};

export default FooterWithCTA;
