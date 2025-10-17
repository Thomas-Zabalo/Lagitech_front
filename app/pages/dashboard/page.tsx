'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import Footer from '@/components/Footer';
import AboutHero from '@/components/second-pages/about/Hero';
import Compare from '@/components/second-pages/pricing/Compare';
import UserProfileTab from '@/components/second-pages/pricing/UserProfileTab';

const DashboardPage = () => {
    const [userId, setUserId] = useState<number | null>(null);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const storedUserId = localStorage.getItem('user_id');
        const storedAdmin = localStorage.getItem('is_admin');

        if (storedUserId) setUserId(Number(storedUserId));
        if (storedAdmin) setIsAdmin(storedAdmin === 'true');
    }, []);

    return (
        <section>
            <AboutHero />

            {!userId && (
                <>
                    <p className="text-white text-center mt-10">Veuillez vous connecter pour accéder à votre profil.</p>
                    <Link href="/second-pages/signin" className="text-blue-500 underline text-center block mt-4">
                        Aller à la page de connexion
                    </Link>
                </>
            )}

            {userId && !isAdmin && <UserProfileTab userId={userId} />}

            {isAdmin && <Compare />}

            <Footer />
        </section>
    );
};

export default DashboardPage;
