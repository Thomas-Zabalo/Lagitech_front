'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

type Match = {
    id: number;
    equip1: string;
    equip2: string;
    score1?: number;
    score2?: number;
    vitessmaxball: number;
    date: string;
};

const matches: Match[] = [
    { id: 1, equip1: "Team Alpha", equip2: "Team Beta", score1: 10, score2: 5, vitessmaxball: 12, date: "16/10/2025 14:00" },
    { id: 2, equip1: "Team Gamma", equip2: "Team Delta", score1: 10, score2: 10, vitessmaxball: 10, date: "16/10/2025 15:30" },
    { id: 3, equip1: "Team Epsilon", equip2: "Team Zeta", vitessmaxball: 11, date: "16/10/2025 17:00" },
];

const MatchList = () => {
    const router = useRouter();

    const handleCardClick = (matchId: number) => {
        router.push(`/pages/matches/${matchId}`);
    };

    return (
        <div className="container mx-auto mt-16 px-4">
            <div className="flex justify-end mb-8 gap-4">
                {/* Bouton Créer un match */}
                <Link
                    href="/pages/createMatch"
                    className="button-regular"
                >
                    Créer un match
                </Link>
            </div>

            {matches.length === 0 ? (
                <div className="text-center py-12 text-gray-500 dark:text-gray-400">
                    Aucun match disponible
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {matches.map((match) => {
                        const isFinished =
                            match.score1 !== undefined &&
                            match.score2 !== undefined &&
                            (match.score1 === 10 || match.score2 === 10);
                        const isUpcoming = match.score1 === undefined && match.score2 === undefined;
                        const status = isFinished ? "Terminé" : isUpcoming ? "À venir" : "En cours";
                        const statusColor = isFinished
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                            : isUpcoming
                                ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                                : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";

                        return (
                            <div
                                key={match.id}
                                onClick={() => handleCardClick(match.id)}
                                className="bg-white dark:bg-gray-800 shadow hover:shadow-lg transition-shadow cursor-pointer p-6 rounded-md"
                            >
                                {/* Header avec statut et date */}
                                <div className="flex justify-between items-start mb-4">
                                    <span className={`px-3 py-1 text-xs font-medium ${statusColor}`}>
                                        {status}
                                    </span>
                                    <span className="text-xs text-gray-500 dark:text-gray-400">
                                        {match.date}
                                    </span>
                                </div>

                                {/* Équipes */}
                                <div className="mb-4">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center mb-2">
                                        {match.equip1}
                                    </h3>
                                    <div className="text-center text-gray-400 dark:text-gray-500 text-sm mb-2">
                                        vs
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center">
                                        {match.equip2}
                                    </h3>
                                </div>

                                {/* Score */}
                                <div className="text-center mb-4 py-3 bg-gray-50 dark:bg-gray-700 rounded-md">
                                    <div className="text-3xl font-bold text-gray-900 dark:text-white">
                                        {match.score1 != null && match.score2 != null
                                            ? `${match.score1} - ${match.score2}`
                                            : "-"}
                                    </div>
                                </div>

                                {/* Vitesse max */}
                                <div className="text-center pt-3 border-t border-gray-200 dark:border-gray-700">
                                    <span className="text-xs text-gray-500 dark:text-gray-400">
                                        Vitesse max:
                                    </span>{" "}
                                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                                        {match.vitessmaxball} km/h
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default MatchList;
