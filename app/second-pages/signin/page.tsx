'use client';
import Navbar from '@/components/Navbar';
import React, { useState, useRef, useEffect } from 'react';
import GenesisLogo from '@/components/icons/shapes/genesis-logo.svg';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import CirclePattern from '@/components/CirclePattern';
import { useTheme } from '@/context/ThemeContext';
import AnimatedContainer from '@/components/AnimatedContainer';

const SigninPage = () => {
    const { heroContainerType } = useTheme();
    const isWide = heroContainerType === 'wide';

    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [textWidth, setTextWidth] = useState(0);

    const measureRef = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {
        if (measureRef.current) {
            setTextWidth(measureRef.current.offsetWidth);
        }
    }, [identifier]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!identifier.trim()) {
            setError('Veuillez saisir votre identifiant Ynov');
            return;
        }

        setError('');
        const email = `${identifier}@ynov.com`;

        // Logique d’authentification
        console.log('Tentative de connexion :', {
            email,
            password
        });
    };

    return (
        <AnimatedContainer className={isWide ? 'bg-main-gradient shadow-black-card' : 'pt-6'}>
            <div className="container">
                <div className={`relative overflow-hidden ${isWide ? '' : 'bg-main-gradient rounded-xl lg:rounded-2xl shadow-black-card'}`}>
                    <CirclePattern className="w-[82rem] lg:block hidden absolute -bottom-1/2 translate-y-24 left-1/2 -translate-x-1/2" />
                    <div className="relative z-20 px-6">
                        <Navbar />
                        <div className="pb-6 pt-10 lg:py-24 max-w-[48rem] mx-auto">
                            <form
                                onSubmit={handleSubmit}
                                className="bg-white/5 px-6 md:px-8 pt-14 pb-10 border border-white/10 backdrop-blur-[24px] rounded-xl lg:rounded-2xl shadow-[0_6px_20px_rgba(0,0,0,0.15)] transition-all duration-300 hover:shadow-[0_10px_25px_rgba(0,0,0,0.2)]"
                            >
                                <div className="flex items-center justify-center border border-white/10 w-[5rem] h-[5rem] mx-auto rounded-lg bg-white/10 shadow-inner">
                                    <svg width="34" height="34" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M12.6598 0C19.4042 0.000123562 24.8724 5.46749 24.8727 12.2119H19.8727C19.8724 8.22892 16.6428 5.00012 12.6598 5C8.67687 5.00024 5.44812 8.22899 5.44788 12.2119C5.44788 16.1304 8.57268 19.3163 12.4664 19.4189V24.4219L12.3453 24.4209C5.74617 24.2539 0.447876 18.8513 0.447876 12.2119C0.448121 5.46757 5.91545 0.00024481 12.6598 0Z"
                                            fill="white"
                                        />
                                        <circle cx="20.3171" cy="19.8694" r="4.55541" fill="white" />
                                    </svg>
                                </div>

                                <h1 className="text-3xl lg:text-5xl font-semibold text-surface-0 text-center mt-8 tracking-tight">Connexion</h1>
                                <p className="text-lg text-white/70 text-center mt-4 max-w-sm mx-auto leading-relaxed">Entrez votre identifiant Ynov et votre mot de passe pour accéder à votre compte.</p>

                                <div className="flex flex-col gap-8 mt-14">
                                    {/* ---- Champ Email ---- */}
                                    <div className="flex flex-col gap-2 relative">
                                        <label htmlFor="signin_email" className="text-surface-0 text-sm font-medium">
                                            Adresse Email
                                        </label>

                                        <div className="relative w-full">
                                            <input
                                                id="signin_email"
                                                type="text"
                                                value={identifier}
                                                onChange={(e) => setIdentifier(e.target.value.replace(/@.*/, ''))}
                                                placeholder=""
                                                className={`w-full px-3 py-2 rounded-md border border-white/20 bg-white/10 text-white placeholder-white/40 focus:ring-2 transition-all ${
                                                    error ? 'border-red-500 focus:ring-red-500' : 'focus:ring-white/30'
                                                }`}
                                            />

                                            {/* Élément invisible servant à mesurer la largeur réelle du texte */}
                                            <span ref={measureRef} className="absolute opacity-0 pointer-events-none whitespace-pre text-base font-normal px-3" style={{ fontFamily: 'inherit' }}>
                                                {identifier}
                                            </span>

                                            {/* Domaine fixé dynamiquement juste à la fin du texte */}
                                            <span
                                                className="absolute top-1/2 -translate-y-1/2 text-white/60 pointer-events-none select-none"
                                                style={{
                                                    left: `calc(${textWidth}px - 0.6rem)`
                                                }}
                                            >
                                                @ynov.com
                                            </span>
                                        </div>

                                        {error && <p className="text-red-400 text-sm mt-1">{error}</p>}
                                    </div>

                                    {/* ---- Mot de passe ---- */}
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="signin_password" className="text-surface-0 text-sm font-medium">
                                            Mot de passe
                                        </label>
                                        <Input
                                            id="signin_password"
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="rounded-md border-white/20 bg-white/10 text-white focus:ring-2 focus:ring-white/30 transition-all"
                                        />
                                    </div>

                                    {/* ---- Bouton ---- */}
                                    <button type="submit" className="button-regular w-full py-3 rounded-md font-medium tracking-wide transition-all duration-300 hover:opacity-90">
                                        Envoyer
                                    </button>

                                    {/* ---- Lien création ---- */}
                                    <div className="text-center mt-4">
                                        <span className="text-white/70">Nouveau ici ? </span>
                                        <Link href={'signup'} className="text-surface-0 font-semibold hover:opacity-90 transition-opacity">
                                            Créer un compte
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
