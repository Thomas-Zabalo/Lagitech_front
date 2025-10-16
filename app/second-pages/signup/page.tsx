'use client';
import Navbar from '@/components/Navbar';
import React from 'react';
import GenesisLogo from '@/components/icons/shapes/genesis-logo.svg';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import CirclePattern from '@/components/CirclePattern';
import { useTheme } from '@/context/ThemeContext';
import AnimatedContainer from '@/components/AnimatedContainer';
const SignupPage = () => {
    const { heroContainerType } = useTheme();
    const isWide = heroContainerType === 'wide';
    return (
        <AnimatedContainer className={isWide ? 'bg-main-gradient shadow-black-card' : 'pt-6'}>
            <div className="container">
                <div className={` relative overflow-hidden ${isWide ? '' : 'bg-main-gradient rounded-3xl lg:rounded-4xl shadow-black-card'}`}>
                    <CirclePattern className="w-[82rem] absolute -bottom-1/2 translate-y-24 left-1/2 -translate-x-1/2 lg:block hidden" />
                    <div className="relative z-20 px-6">
                        <Navbar />
                        <div className="pb-6 pt-10 lg:py-24 max-w-[48rem] mx-auto">
                            <form className="bg-white/4 px-6 md:px-8 pt-16 pb-12 border border-white/8 backdrop-blur-[48px] rounded-2.5xl lg:rounded-4xl shadow-[0px_2px_5px_0px_rgba(255,255,255,0.06)_inset,0px_12px_20px_0px_rgba(0,0,0,0.06)]">
                                <div className="flex items-center justify-center border border-white/8 w-[5.5rem] h-[5.5rem] mx-auto rounded-3xl bg-white/8 backdrop-blur-[48px] shadow-[0px_2px_5px_0px_rgba(255,255,255,0.06)_inset,0px_12px_20px_0px_rgba(0,0,0,0.06)]">
                                    <GenesisLogo width={36} />
                                </div>
                                <h1 className="text-3xl lg:text-6xl font-semibold text-surface-0 text-center mt-8">Sign Up</h1>
                                <p className="text-xl text-white/64 text-center mt-6">Enter your details to create a new account.</p>
                                <div className="flex flex-col gap-8 mt-16">
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="signup_username" className="text-surface-0">
                                            Username
                                        </label>
                                        <Input id="signup_username" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="signup_email" className="text-surface-0">
                                            Email Address
                                        </label>
                                        <Input id="signup_email" type="email" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="signup_password" className="text-surface-0">
                                            Password
                                        </label>
                                        <Input id="signup_password" type="password" />
                                    </div>
                                    <button type="submit" className="button-regular w-full py-3">
                                        Register
                                    </button>
                                    <div className="text-center">
                                        <span className="text-white/64">Already have an account? </span>
                                        <Link href={'signin'} className="text-surface-0 font-semibold hover:opacity-90 transition-opacity">
                                            Login
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AnimatedContainer>
    );
};

export default SignupPage;
