'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

type Babyfoot = {
    id: number;
    etat: string;
    used: boolean; // true = Occupé, false = Disponible
};

const mockBabyfoots: Babyfoot[] = [
    { id: 1, etat: 'Neuf', used: false },
    { id: 2, etat: 'En jeu', used: true }
];

const BabyfootTab = () => {
    const [babyfoots, setBabyfoots] = useState<Babyfoot[]>([]);
    const [editingBaby, setEditingBaby] = useState<Babyfoot | null>(null);
    const [loading, setLoading] = useState(true);
    const [newBaby, setNewBaby] = useState<Babyfoot>({
        id: 0,
        etat: 'Neuf',
        used: false
    });

    useEffect(() => {
        const fetchBabyfoots = async () => {
            try {
                const res = await axios.get<Babyfoot[]>('http://localhost:8080/api/babyfoots/all');
                setBabyfoots(res.data);
            } catch (err) {
                console.warn('API non dispo, utilisation des mock', err);
                setBabyfoots(mockBabyfoots);
            } finally {
                setLoading(false);
            }
        };
        fetchBabyfoots();
    }, []);

    const handleAddBabyfoot = async () => {
        const newItem: Babyfoot = { ...newBaby, id: Date.now() };
        setBabyfoots((prev) => [...prev, newItem]);
        try {
            const res = await axios.post('http://localhost:8080/api/babyfoots', newItem);
            setBabyfoots((prev) => prev.map((b) => (b.id === newItem.id ? res.data : b)));
        } catch (err) {
            console.warn('API POST non dispo, mock conservé', err);
        }
        setNewBaby({ id: 0, etat: 'Neuf', used: false });
    };

    const handleDeleteBabyfoot = async (id: number) => {
        setBabyfoots((prev) => prev.filter((b) => b.id !== id));
        try {
            await axios.delete(`http://localhost:8080/api/babyfoots/${id}`);
        } catch (err) {
            console.warn('API DELETE non dispo', err);
        }
    };

    const handleSaveBabyfoot = async () => {
        if (!editingBaby) return;
        setBabyfoots((prev) => prev.map((b) => (b.id === editingBaby.id ? editingBaby : b)));
        try {
            await axios.put(`http://localhost:8080/api/babyfoots/${editingBaby.id}`, editingBaby);
        } catch (err) {
            console.warn('API PUT non dispo', err);
        }
        setEditingBaby(null);
    };

    if (loading) return <p className="text-center text-gray-500">Chargement...</p>;

    return (
        <>
            {/* Formulaire d'ajout */}
            <div className="flex flex-col lg:flex-row gap-3 mb-6">
                <select
                    className="w-full px-3 py-2 rounded-md border dark:bg-gray-700 dark:border-white/20 border-black/20 bg-white/10 dark:text-white text-black focus:ring-2 focus:ring-white/30 transition-all"
                    value={newBaby.etat}
                    onChange={(e) => setNewBaby({ ...newBaby, etat: e.target.value })}
                >
                    <option value="Neuf">Neuf</option>
                    <option value="En jeu">En jeu</option>
                    <option value="En maintenance">En maintenance</option>
                </select>

                <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-all" onClick={handleAddBabyfoot}>
                    Ajouter
                </button>
            </div>

            {/* Tableau */}
            <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
                <table className="w-full text-sm text-left text-gray-600 dark:text-gray-300">
                    <thead className="text-xs uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th className="px-6 py-4 text-center">État</th>
                            <th className="px-6 py-4 text-center">Dispo</th>
                            <th className="px-6 py-4 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {babyfoots.map((b) => (
                            <tr key={b.id} className="bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                                {editingBaby?.id === b.id ? (
                                    <>
                                        <td className="px-6 py-4 text-center">
                                            <select value={editingBaby.etat} onChange={(e) => setEditingBaby({ ...editingBaby, etat: e.target.value })} className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white px-2 py-1 rounded">
                                                <option value="Neuf">Neuf</option>
                                                <option value="En jeu">En jeu</option>
                                                <option value="En maintenance">En maintenance</option>
                                            </select>
                                        </td>

                                        <td className="px-6 py-4 text-center">
                                            <button className={`px-4 py-1 rounded-full text-white ${editingBaby.used ? 'bg-gray-600' : 'bg-green-600'}`} onClick={() => setEditingBaby({ ...editingBaby, used: !editingBaby.used })}>
                                                {editingBaby.used ? 'Occupé' : 'Disponible'}
                                            </button>
                                        </td>

                                        <td className="px-6 py-4 text-center flex justify-center gap-2">
                                            <button onClick={handleSaveBabyfoot} className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm transition-all">
                                                Enregistrer
                                            </button>
                                            <button onClick={() => setEditingBaby(null)} className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-full text-sm transition-all">
                                                Annuler
                                            </button>
                                        </td>
                                    </>
                                ) : (
                                    <>
                                        <td className="px-6 py-4 text-center">{b.etat}</td>
                                        <td className="px-6 py-4 text-center">
                                            <button className={`px-4 py-1 rounded-full text-white ${b.used ? 'bg-gray-600' : 'bg-green-600'}`} disabled>
                                                {b.used ? 'Occupé' : 'Disponible'}
                                            </button>
                                        </td>
                                        <td className="px-6 py-4 text-center flex justify-center gap-2">
                                            <button onClick={() => setEditingBaby(b)} className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-full text-sm transition-all">
                                                Modifier
                                            </button>
                                            <button onClick={() => handleDeleteBabyfoot(b.id)} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm transition-all">
                                                Supprimer
                                            </button>
                                        </td>
                                    </>
                                )}
                            </tr>
                        ))}

                        {babyfoots.length === 0 && (
                            <tr>
                                <td colSpan={3} className="text-center py-4 text-gray-500 dark:text-gray-400">
                                    Aucun babyfoot
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default BabyfootTab;
