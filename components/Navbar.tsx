'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import Logo from './Logo';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown';

const Navbar: React.FC<React.HTMLAttributes<HTMLElement>> = ({ className, ...props }) => {
    const pathname = usePathname();
    return (
        <nav className={cn('flex items-center relative z-[99999] justify-between py-6 w-[calc(100%-3rem)] max-h-[75px] mx-auto border-b border-white/10 border-dashed', className)} {...props}>
            <Link href="/">
                <Logo />
            </Link>
            <ul className="hidden lg:flex items-center gap-3">
                {navbarData.map((root) => (
                    <li key={root.id}>
                        <DropdownMenu unstyled className="flex-1 max-w-60">
                            <DropdownMenuTrigger className="inline-flex items-center gap-2 rounded-full py-1 pr-2 pl-3 select-none transition-all cursor-pointer text-white/72 hover:text-white hover:bg-white/8 hover:shadow-[0px_10px_10px_-8px_rgba(18,18,23,0.02),0px_2px_2px_-1.5px_rgba(18,18,23,0.02),0px_1px_1px_-0.5px_rgba(18,18,23,0.02),0px_0px_0px_1px_rgba(18,18,23,0.02)] group-data-[open=true]:!bg-white/16 group-data-[open=true]:!text-white group-data-[open=true]:!backdrop-blur-2xl border border-white/0 group-data-[open=true]:!border-white/4 group-data-[open=true]:!shadow-[0px_2px_5px_0px_rgba(255,255,255,0.06)_inset,0px_12px_20px_0px_rgba(0,0,0,0.06)]">
                                <span className="text-base">{root.title}</span>
                                <i className="pi pi-chevron-down text-xs"></i>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="top-[calc(100%+0.5rem)] w-40 p-2 rounded-2xl shadow-blue-card flex flex-col gap-2 bg-surface-0">
                                {root.content.map((item, index) => (
                                    <Link key={index} href={item.to} className="w-full">
                                        <DropdownMenuItem
                                            className={`w-full text-left py-2 px-3 rounded-lg  transition-all font-medium ${item.to === pathname ? 'text-surface-950 bg-surface-200' : 'text-surface-500 hover:text-surface-950 hover:bg-surface-200'}`}
                                        >
                                            {item.label}
                                        </DropdownMenuItem>
                                    </Link>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </li>
                ))}
            </ul>
            <ul className="hidden lg:flex items-center">
                <li>
                    <Link href="/second-pages/signup" className="button-regular">Sign Up</Link>
                </li>
            </ul>
            <DropdownMenu unstyled className="lg:hidden block">
                <DropdownMenuTrigger className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-surface-0 text-surface-950">
                    <i className="pi pi-bars"></i>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="top-[calc(100%+0.5rem)] max-h-96 overflow-auto left-auto !right-0 w-60 p-2 rounded-2xl shadow-blue-card flex flex-col bg-surface-0">
                    <div className="flex flex-col ">
                        {navbarData.map((root) => (
                            <div key={root.id} className="mt-4">
                                <span className="px-3 !py-2 text-surface-950 font-medium">{root.title}</span>
                                <div className="flex flex-col gap-1 my-2">
                                    {root.content.map((item, index) => (
                                        <Link href={item.to} key={index} className="py-2 px-3 rounded-lg hover:bg-surface-200 font-medium text-surface-500 hover:text-surface-950">
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </DropdownMenuContent>
            </DropdownMenu>
        </nav>
    );
};

export default Navbar;

const navbarData = [
    {
        id: 'landings',
        title: 'Landings',
        content: [
            {
                label: 'Travel',
                to: '/pages/travel'
            },
            {
                label: 'SaaS',
                to: '/pages/saas'
            },
            {
                label: 'Startup',
                to: '/pages/startup'
            },
            {
                label: 'Enterprise',
                to: '/pages/enterprise'
            },
            {
                label: 'E-Learning',
                to: '/pages/e-learning'
            },
            {
                label: 'Real Estate',
                to: '/pages/real-estate'
            },
            {
                label: 'Logistics',
                to: '/pages/logistic'
            },
            {
                label: 'Agency',
                to: '/pages/agency'
            }
        ]
    },
    {
        id: 'second_pages',
        title: 'Secondary Pages',
        content: [
            {
                label: 'About',
                to: '/second-pages/about'
            },
            {
                label: 'Pricing',
                to: '/second-pages/pricing'
            },
            {
                label: 'Blog',
                to: '/second-pages/blog'
            },
            {
                label: 'Blog Detail',
                to: '/second-pages/blog/detail'
            },
            {
                label: 'Contact',
                to: '/second-pages/contact'
            }
        ]
    },
    {
        id: 'account_pages',
        title: 'Account Pages',
        content: [
            {
                label: 'Sign Up',
                to: '/second-pages/signup'
            },
            {
                label: 'Sign In',
                to: '/second-pages/signin'
            },
            {
                label: 'Error',
                to: '/second-pages/error'
            },
            {
                label: 'Password Reset',
                to: '/second-pages/reset-password'
            },
            {
                label: 'Account General',
                to: '/second-pages/account'
            }
        ]
    }
];
