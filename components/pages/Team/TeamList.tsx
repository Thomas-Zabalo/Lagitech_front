'use client';

import React from 'react';
import Link from 'next/link';

type Team = {
    id: number;
    name: string;
};

const teams: Team[] = [
    { id: 1, name: 'Team Alpha' },
    { id: 2, name: 'Team Beta' },
    { id: 3, name: 'Team Delta' },
    { id: 4, name: 'Team Omega' },
];

const TeamList = () => {
    return (
        <div className="container mx-auto mt-16 px-4">
            {/* Bouton créer une équipe */}
            <div className="flex justify-end mb-8">
                <Link href="/teams/create" className="button-regular">
                    Créer une équipe
                </Link>
            </div>

            {/* Tableau des équipes */}
            <div className="relative overflow-x-auto rounded-xl shadow-lg bg-white dark:bg-gray-800">
                <table className="w-full text-sm text-left text-gray-600 dark:text-gray-300">
                    <thead className="text-xs uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-4">
                            Nom de l’équipe
                        </th>
                        <th scope="col" className="px-6 py-4 text-center">
                            Action
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {teams.map((team) => (
                        <tr
                            key={team.id}
                            className="bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                        >
                            <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                {team.name}
                            </th>
                            <td className="px-6 py-4 text-center">
                                <button
                                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all"
                                    onClick={() => alert(`Tu as rejoint ${team.name} !`)}
                                >
                                    Rejoindre
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            {teams.length === 0 && (
                <p className="text-center text-gray-500 dark:text-gray-400 mt-8">
                    Aucune équipe pour le moment.
                </p>
            )}
        </div>
    );
};

export default TeamList;
