'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';
import Logo from './Logo';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from './ui/dropdown';

const Navbar: React.FC<React.HTMLAttributes<HTMLElement>> = ({ className, ...props }) => {
    return (
        <nav className={cn('flex items-center relative z-[99999] justify-between py-6 w-[calc(100%-3rem)] max-h-[75px] mx-auto border-b border-white/10 border-dashed', className)} {...props}>
            <Link href="/">
                <Logo />
            </Link>
            <ul className="hidden lg:flex items-center gap-3">
                <li>
                    <Link href="/pages/real-estate" className="w-full">
                        Lagitech
                    </Link>
                </li>
                <li>
                    <Link href="/pages/dashboard" className="w-full">
                        Dashboard
                    </Link>
                </li>

            </ul>
            <ul className="hidden lg:flex items-center">
                <li>
                    <Link href="/second-pages/signup" className="button-regular">
                        Sign Up
                    </Link>
                </li>
            </ul>
            <DropdownMenu unstyled className="lg:hidden block">
                <DropdownMenuTrigger className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-surface-0 text-surface-950">
                    <i className="pi pi-bars"></i>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="top-[calc(100%+0.5rem)] max-h-96 overflow-auto left-auto !right-0 w-60 p-2 rounded-2xl shadow-blue-card flex flex-col bg-surface-0">
                    <div className="flex flex-col ">
                        <Link href="/pages/real-estate" className="py-2 px-3 rounded-lg hover:bg-surface-200 font-medium text-surface-500 hover:text-surface-950">
                            Lagitech
                        </Link>
                        <Link href="/pages/dashboard" className="py-2 px-3 rounded-lg hover:bg-surface-200 font-medium text-surface-500 hover:text-surface-950">
                            Dashboard
                        </Link>
                    </div>
                </DropdownMenuContent>
            </DropdownMenu>
        </nav>
    );
};

export default Navbar;
