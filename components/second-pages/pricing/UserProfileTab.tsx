'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

type User = {
    id: number;
    name: string;
    email: string;
};

interface UserProfileTabProps {
    userId: number;
}

const UserProfileTab: React.FC<UserProfileTabProps> = ({ userId }) => {
    const [user, setUser] = useState<User | null>(null);
    const [tempUser, setTempUser] = useState<User | null>(null);
    const [editing, setEditing] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get<User>(`http://localhost:8080/api/users/${userId}`);
                setUser(res.data);
            } catch (err) {
                console.error('Erreur lors de la récupération du profil', err);
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, [userId]);

    const handleSave = async () => {
        if (!tempUser) return;

        try {
            await axios.put(`/api/users/${userId}`, tempUser);
            setUser(tempUser);
            setEditing(false);
        } catch (err) {
            console.error('Erreur lors de la mise à jour du profil', err);
        }
    };

    if (loading) return <p className="text-white text-center">Chargement...</p>;
    if (!user) return <p className="text-white text-center">Utilisateur introuvable</p>;

    return (
        <div className="max-w-2xl mx-auto overflow-hidden rounded-lg border mt-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white text-center">Mon profil</h2>

            {editing ? (
                <div className="space-y-4">
                    <div>
                        <label className="block text-gray-700 dark:text-gray-300 mb-1">Nom complet</label>
                        <input type="text" value={tempUser?.name || ''} onChange={(e) => setTempUser({ ...tempUser!, name: e.target.value })} className="w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white px-3 py-2 rounded" />
                    </div>

                    <div>
                        <label className="block text-gray-700 dark:text-gray-300 mb-1">Email</label>
                        <input type="email" value={tempUser?.email || ''} onChange={(e) => setTempUser({ ...tempUser!, email: e.target.value })} className="w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white px-3 py-2 rounded" />
                    </div>

                    <div className="flex justify-center gap-3 pt-4">
                        <button onClick={handleSave} className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full text-sm transition-all">
                            Enregistrer
                        </button>
                        <button onClick={() => setEditing(false)} className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-full text-sm transition-all">
                            Annuler
                        </button>
                    </div>
                </div>
            ) : (
                <div className="space-y-3">
                    <p className="text-gray-900 dark:text-white">
                        <strong>Nom complet :</strong> {user.name}
                    </p>
                    <p className="text-gray-900 dark:text-white">
                        <strong>Email :</strong> {user.email}
                    </p>

                    <div className="flex justify-center pt-4">
                        <button
                            onClick={() => {
                                setEditing(true);
                                setTempUser({ ...user });
                            }}
                            className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-2 rounded-full text-sm transition-all"
                        >
                            Modifier mes informations
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserProfileTab;
