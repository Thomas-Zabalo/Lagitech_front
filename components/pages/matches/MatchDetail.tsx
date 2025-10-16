'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

type Goal = {
    id: number;
    team: string;
    speed: number;
    time: string;
};

type MatchDetail = {
    id: number;
    equip1: string;
    equip2: string;
    score1: number;
    score2: number;
    vitessmaxball: number;
    date: string;
    status: string;
    goals: Goal[];
};

const matchData: MatchDetail = {
    id: 1,
    equip1: "Team Alpha",
    equip2: "Team Beta",
    score1: 10,
    score2: 5,
    vitessmaxball: 12,
    date: "16/10/2025 14:00",
    status: "Terminé",
    goals: [
        { id: 1, team: "Team Alpha", speed: 12, time: "2:15"},
        { id: 2, team: "Team Beta", speed: 10, time: "3:42"},
        { id: 3, team: "Team Alpha", speed: 11, time: "5:20"},
        { id: 4, team: "Team Alpha", speed: 9, time: "7:08"},
        { id: 5, team: "Team Beta", speed: 11, time: "8:45"},
    ]
};

const MatchDetailPage = () => {
    const router = useRouter();

    return (
        <div className="min-h-screen py-12 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 max-w-5xl">
                {/* Bouton Retour */}
                <button
                    onClick={() => router.back()}
                    className="mb-8 flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Retour
                </button>

                {/* En-tête du match */}
                <div className="bg-white dark:bg-gray-800 shadow-sm p-8 mb-6 rounded-md">
                    <div className="flex justify-between items-center mb-8">
                        <span className="text-sm text-gray-500 dark:text-gray-400">{matchData.date}</span>
                        <span className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                            {matchData.status}
                        </span>
                    </div>

                    {/* Score */}
                    <div className="grid grid-cols-3 items-center gap-6 mb-8">
                        <div className="text-center">
                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                                {matchData.equip1}
                            </h2>
                            <div className="text-5xl font-bold text-gray-900 dark:text-white">
                                {matchData.score1}
                            </div>
                        </div>

                        <div className="text-center">
                            <div className="text-2xl text-gray-400 dark:text-gray-500">-</div>
                        </div>

                        <div className="text-center">
                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                                {matchData.equip2}
                            </h2>
                            <div className="text-5xl font-bold text-gray-900 dark:text-white">
                                {matchData.score2}
                            </div>
                        </div>
                    </div>

                    {/* Vitesse max */}
                    <div className="text-center pt-6 border-t border-gray-200 dark:border-gray-700">
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Vitesse max</p>
                        <p className="text-2xl font-semibold text-gray-900 dark:text-white">
                            {matchData.vitessmaxball} km/h
                        </p>
                    </div>
                </div>

                {/* Liste des buts */}
                <div className="bg-white dark:bg-gray-800 shadow-sm rounded-md">
                    <div className="px-8 py-5 border-b border-gray-200 dark:border-gray-700">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                            Buts
                        </h3>
                    </div>

                    <div className="p-8">
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm ">
                                <thead>
                                <tr className="border-b border-gray-200 dark:border-gray-700">
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                                        Temps
                                    </th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                                        Équipe
                                    </th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                                        Vitesse
                                    </th>
                                </tr>
                                </thead>
                                <tbody>
                                {matchData.goals.length === 0 ? (
                                    <tr>
                                        <td colSpan={3} className="px-4 py-12 text-center text-gray-500 dark:text-gray-400">
                                            Aucun but
                                        </td>
                                    </tr>
                                ) : (
                                    matchData.goals.map((goal) => (
                                        <tr
                                            key={goal.id}
                                            className="border-b border-gray-100 dark:border-gray-700 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                                        >
                                            <td className="px-4 py-4 text-gray-900 dark:text-white">
                                                {goal.time}
                                            </td>
                                            <td className="px-4 py-4">
                                                    <span className="text-gray-700 dark:text-gray-300">
                                                        {goal.team}
                                                    </span>
                                            </td>
                                            <td className="px-4 py-4 text-gray-900 dark:text-white font-medium">
                                                {goal.speed} km/h
                                            </td>
                                        </tr>
                                    ))
                                )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MatchDetailPage;