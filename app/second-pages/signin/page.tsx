'use client';
import Navbar from '@/components/Navbar';
import React from 'react';
import GenesisLogo from '@/components/icons/shapes/genesis-logo.svg';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import Link from 'next/link';
import GoogleLogo from '@/components/icons/google.svg';
import AppleLogo from '@/components/icons/apple.svg';
import CirclePattern from '@/components/CirclePattern';
import { useTheme } from '@/context/ThemeContext';
import AnimatedContainer from '@/components/AnimatedContainer';
const SigninPage = () => {
    const { heroContainerType } = useTheme();
    const isWide = heroContainerType === 'wide';
    return (
        <AnimatedContainer className={isWide ? 'bg-main-gradient shadow-black-card' : 'pt-6'}>
            <div className="container">
                <div className={` relative overflow-hidden ${isWide ? '' : 'bg-main-gradient rounded-3xl lg:rounded-4xl shadow-black-card'}`}>
                    <CirclePattern className="w-[82rem] lg:block hidden absolute -bottom-1/2 translate-y-24 left-1/2  -translate-x-1/2" />
                    <div className="relative z-20 px-6">
                        <Navbar />
                        <div className="pb-6 pt-10 lg:py-24 max-w-[48rem] mx-auto">
                            <form className="bg-white/4 px-6 md:px-8 pt-16 pb-12 border border-white/8 backdrop-blur-[48px] rounded-2.5xl lg:rounded-4xl shadow-[0px_2px_5px_0px_rgba(255,255,255,0.06)_inset,0px_12px_20px_0px_rgba(0,0,0,0.06)]">
                                <div className="flex items-center justify-center border border-white/8 w-[5.5rem] h-[5.5rem] mx-auto rounded-3xl bg-white/8 backdrop-blur-[48px] shadow-[0px_2px_5px_0px_rgba(255,255,255,0.06)_inset,0px_12px_20px_0px_rgba(0,0,0,0.06)]">
                                    <GenesisLogo width={36} />
                                </div>
                                <h1 className="text-3xl lg:text-6xl font-semibold text-surface-0 text-center mt-8">Sign In</h1>
                                <p className="text-xl text-white/64 text-center mt-6 max-w-sm mx-auto">Enter your username and password to access your account.</p>
                                <div className="flex flex-col gap-8 mt-16">
                                    <div className="flex md:flex-row flex-col items-center gap-4">
                                        <button className="md:flex-1 w-full button-blur">
                                            <GoogleLogo />
                                            Sign in with Google
                                        </button>
                                        <button className="md:flex-1 w-full button-blur">
                                            <AppleLogo />
                                            Sign in with Apple
                                        </button>
                                    </div>
                                    <div className="flex items-center gap-3.5 py-1">
                                        <div className="flex-1 h-px bg-[linear-gradient(270deg,rgba(255,255,255,0.34)_0%,rgba(255,255,255,0.00)_100%)]"></div>
                                        <span className="text-white/72">or</span>
                                        <div className="flex-1 h-px bg-[linear-gradient(90deg,rgba(255,255,255,0.34)_0%,rgba(255,255,255,0.00)_100%)]"></div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="signin_email" className="text-surface-0">
                                            Email Address
                                        </label>
                                        <Input id="signin_email" type="email" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="signin_password" className="text-surface-0">
                                            Password
                                        </label>
                                        <Input id="signin_password" type="password" />
                                    </div>
                                    <div className="flex items-center justify-between gap-2">
                                        <div>
                                            <label className="flex items-center gap-2">
                                                <Checkbox />
                                                <span className="text-white/64">Remember me</span>
                                            </label>
                                        </div>
                                        <Link href={'forgot-password'} className=" text-white/72 hover:text-white/90 transition-all">
                                            Forgot password?
                                        </Link>
                                    </div>
                                    <button type="submit" className="button-regular w-full py-3">
                                        Login
                                    </button>
                                    <div className="text-center">
                                        <span className="text-white/64">Not registered? </span>
                                        <Link href={'signup'} className="text-surface-0 font-semibold hover:opacity-90 transition-opacity">
                                            Create an Account
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

export default SigninPage;
