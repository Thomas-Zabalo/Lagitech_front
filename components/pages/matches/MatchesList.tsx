'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

type Team = {
    id: number;
    name: string;
    users: any[];
};

type Match = {
    id: number;
    score_1: number | null;
    score_2: number | null;
    equipe_1: Team;
    equipe_2: Team;
    vitesse_max: number;
    babyfoot: any;
    created_at: string | null;
    goals: any[];
};

// Configuration axios pour envoyer du JSON
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.common['Accept'] = 'application/json';

const MatchList = () => {
    const router = useRouter();
    const [matches, setMatches] = useState<Match[]>([]);
    const [teams, setTeams] = useState<Team[]>([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [userTeam, setUserTeam] = useState<Team | null>(null);
    const [selectedOpponent, setSelectedOpponent] = useState<number | null>(null);

    // Récupérer les équipes et les matchs
    useEffect(() => {
        const fetchData = async () => {
            try {
                const [teamsRes, matchesRes] = await Promise.all([
                    axios.get<Team[]>('http://localhost:8080/api/teams'),
                    axios.get<Match[]>('http://localhost:8080/api/matches'),
                ]);

                setTeams(teamsRes.data);

                // Trier les matchs par date (plus récent d'abord)
                const sortedMatches = matchesRes.data.sort((a, b) => {
                    if (!a.created_at) return 1;
                    if (!b.created_at) return -1;
                    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
                });

                setMatches(sortedMatches);

                if (teamsRes.data.length > 0) {
                    setUserTeam(teamsRes.data[0]);
                    if (teamsRes.data.length > 1) setSelectedOpponent(teamsRes.data[1].id);
                }
            } catch (err) {
                console.error(err);
                alert('Erreur lors de la récupération des données');
            }
        };

        fetchData();
    }, []);

    const createMatch = async () => {
        if (!userTeam || !selectedOpponent) return;

        try {
            // Envoyer juste les IDs des équipes
            const response = await axios.post<Match>(
                'http://localhost:8080/api/matches',
                {
                    equipe_1: userTeam.id,
                    equipe_2: selectedOpponent
                },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );

            // Ajouter le nouveau match au début de la liste
            setMatches([response.data, ...matches]);
            setModalOpen(false);
        } catch (err) {
            console.error('Erreur création match:', err);
            alert('Erreur lors de la création du match');
        }
    };

    const handleCardClick = (matchId: number) => {
        router.push(`/pages/matches/${matchId}`);
    };

    return (
        <div className="container mx-auto mt-16 px-4">
            <div className="flex justify-end mb-8 gap-4">
                <button onClick={() => setModalOpen(true)} className="mt-6
                    px-5 py-2 rounded-full flex items-center justify-center gap-2 font-medium cursor-pointer
                    text-surface-950 bg-transparent border border-black/24
                    hover:bg-black/10 hover:opacity-80 transition-all duration-300
                    dark:bg-white dark:text-black dark:border-0 dark:shadow-blue-card
                    ">
                    Créer un match
                </button>
            </div>

            {matches.length === 0 ? (
                <div className="text-center py-12 text-gray-500 dark:text-gray-400">
                    Aucun match disponible
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {matches.map(match => (
                        <div
                            key={match.id}
                            onClick={() => handleCardClick(match.id)}
                            className="bg-white dark:bg-gray-800 shadow hover:shadow-lg transition-shadow cursor-pointer p-6 rounded-md"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <span className={`px-3 py-1 text-xs font-medium ${
                                    match.score_1 !== null && match.score_2 !== null
                                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 rounded-md'
                                        : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 rounded-md'
                                }`}>
                                    {match.score_1 !== null && match.score_2 !== null ? "Terminé" : "À venir"}
                                </span>
                                <span className="text-xs text-gray-500 dark:text-gray-400">
                                    {match.created_at ? new Date(match.created_at).toLocaleString('fr-FR') : 'Date non définie'}
                                </span>
                            </div>

                            <div className="mb-4 text-center">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{match.equipe_1.name}</h3>
                                <div className="text-gray-400 dark:text-gray-500 text-sm mb-2">vs</div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{match.equipe_2.name}</h3>
                            </div>

                            <div className="text-center mb-4 py-3 bg-gray-50 dark:bg-gray-700 rounded-md">
                                <div className="text-3xl font-bold text-gray-900 dark:text-white">
                                    {match.score_1 !== null && match.score_2 !== null
                                        ? `${match.score_1} - ${match.score_2}`
                                        : "-"}
                                </div>
                            </div>

                            {match.vitesse_max && (
                                <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                                    Vitesse max: {match.vitesse_max} km/h
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}

            {modalOpen && userTeam && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg w-96">
                        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Créer un match</h2>

                        <div className="mb-4">
                            <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">Ton équipe</label>
                            <select
                                value={userTeam.id}
                                className="w-full px-3 py-2 border rounded text-gray-900 dark:text-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                                disabled
                            >
                                <option value={userTeam.id}>{userTeam.name}</option>
                            </select>
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">Équipe adverse</label>
                            <select
                                value={selectedOpponent || ''}
                                onChange={(e) => setSelectedOpponent(Number(e.target.value))}
                                className="w-full px-3 py-2 border rounded text-gray-900 dark:text-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                            >
                                {teams.filter(t => t.id !== userTeam.id).map(t => (
                                    <option key={t.id} value={t.id}>{t.name}</option>
                                ))}
                            </select>
                        </div>

                        <div className="flex justify-end gap-2">
                            <button
                                onClick={() => setModalOpen(false)}
                                className="px-4 py-2 rounded-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200"
                            >
                                Annuler
                            </button>
                            <button
                                onClick={createMatch}
                                className="px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white"
                            >
                                Créer
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MatchList;