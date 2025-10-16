'use client';
import React, { useState, useEffect } from 'react';
import AnimatedContainer from '@/components/AnimatedContainer';
import axios from 'axios';

type Babyfoot = {
    id: number;
    name: string;
    gamesPlayed: number;
    condition: string;
    available: boolean;
};

const mockBabyfoots: Babyfoot[] = [
    { id: 1, name: 'Babyfoot Salle A', gamesPlayed: 42, condition: 'Bon', available: true },
    { id: 2, name: 'Babyfoot Salle B', gamesPlayed: 75, condition: 'Moyen', available: false }
];

const BabyfootTab = () => {
    const [babyfoots, setBabyfoots] = useState<Babyfoot[]>([]);
    const [editingBaby, setEditingBaby] = useState<Babyfoot | null>(null);
    const [loading, setLoading] = useState(true);
    const [newBaby, setNewBaby] = useState({ name: '', gamesPlayed: 0, condition: 'Bon', available: true });

    // Fetch depuis l'API mais fallback vers mock
    useEffect(() => {
        const fetchBabyfoots = async () => {
            try {
                const res = await axios.get<Babyfoot[]>('/api/babyfoots');
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
        if (!newBaby.name.trim()) return;

        const newItem: Babyfoot = { id: Date.now(), ...newBaby };
        setBabyfoots((prev) => [...prev, newItem]);

        try {
            const res = await axios.post('/api/babyfoots', newItem);
            setBabyfoots((prev) => prev.map((b) => (b.id === newItem.id ? res.data : b)));
        } catch (err) {
            console.warn('API POST non dispo, mock conservé', err);
        }

        setNewBaby({ name: '', gamesPlayed: 0, condition: 'Bon', available: true });
    };

    const handleDeleteBabyfoot = async (id: number) => {
        setBabyfoots((prev) => prev.filter((b) => b.id !== id));
        try {
            await axios.delete(`/api/babyfoots/${id}`);
        } catch (err) {
            console.warn('API DELETE non dispo', err);
        }
    };

    const handleUpdateBabyfoot = async (id: number, updatedFields: Partial<Babyfoot>) => {
        setBabyfoots((prev) => prev.map((b) => (b.id === id ? { ...b, ...updatedFields } : b)));
        try {
            const baby = babyfoots.find((b) => b.id === id);
            if (!baby) return;
            await axios.put(`/api/babyfoots/${id}`, { ...baby, ...updatedFields });
            console.log('Mise à jour envoyée');
        } catch (err) {
            console.warn('API PUT non dispo', err);
        }
    };

    if (loading) return <p className="text-white text-center">Chargement...</p>;

    return (
        <>
            {/* Formulaire d'ajout */}
            <div className="flex flex-col lg:flex-row gap-3 mb-6">
                <input type="text" placeholder="Nom du babyfoot" className="flex-1 bg-white/10 rounded-full px-4 py-2 text-white placeholder-white/60" value={newBaby.name} onChange={(e) => setNewBaby({ ...newBaby, name: e.target.value })} />
                <input
                    type="number"
                    placeholder="Nombre de parties"
                    className="w-40 bg-white/10 rounded-full px-4 py-2 text-white placeholder-white/60"
                    value={newBaby.gamesPlayed}
                    onChange={(e) => setNewBaby({ ...newBaby, gamesPlayed: Number(e.target.value) })}
                />
                <select className="bg-white/10 rounded-full px-4 py-2 text-white" value={newBaby.condition} onChange={(e) => setNewBaby({ ...newBaby, condition: e.target.value })}>
                    <option value="Bon">Bon</option>
                    <option value="Moyen">Moyen</option>
                    <option value="Usé">Usé</option>
                </select>
                <button className="button-regular !bg-green-600 hover:!bg-green-700 text-white text-sm px-6 py-2 rounded-full transition-all" onClick={handleAddBabyfoot}>
                    Ajouter
                </button>
            </div>

            {/* Tableau */}
            <div className="lg:flex hidden items-center bg-white/16 rounded-full border border-white/8 backdrop-blur-[48px]">
                <div className="flex-1 px-8 py-4">
                    <span className="text-xl font-medium title">Nom</span>
                </div>
                <div className="w-[20%] px-8 py-4 text-center">
                    <span className="text-xl font-medium title">Parties</span>
                </div>
                <div className="w-[20%] px-8 py-4 text-center">
                    <span className="text-xl font-medium title">État</span>
                </div>
                <div className="w-[20%] px-8 py-4 text-center">
                    <span className="text-xl font-medium title">Dispo</span>
                </div>
                <div className="w-[20%] px-8 py-4 text-center">
                    <span className="text-xl font-medium title">Action</span>
                </div>
            </div>

            <div className="mt-3">
                {babyfoots.map((b, index) => (
                    <AnimatedContainer key={b.id} delay={index * 150} className="flex lg:flex-row flex-col lg:border-b border-white/12 border-dashed last:border-none items-center">
                        {editingBaby?.id === b.id ? (
                            <>
                                <div className="flex-1 lg:px-8 px-4 py-4 text-center lg:text-left">
                                    <input type="text" className="bg-white/10 px-3 py-2 rounded-full text-white w-full" value={editingBaby.name} onChange={(e) => setEditingBaby({ ...editingBaby, name: e.target.value })} />
                                </div>
                                <div className="w-[20%] text-center py-4">
                                    <input type="number" className="bg-white/10 px-3 py-2 rounded-full text-white w-20" value={editingBaby.gamesPlayed} onChange={(e) => setEditingBaby({ ...editingBaby, gamesPlayed: Number(e.target.value) })} />
                                </div>
                                <div className="w-[20%] text-center py-4">
                                    <select className="bg-white/10 rounded-full px-2 py-1 text-white" value={editingBaby.condition} onChange={(e) => setEditingBaby({ ...editingBaby, condition: e.target.value })}>
                                        <option value="Bon">Bon</option>
                                        <option value="Moyen">Moyen</option>
                                        <option value="Usé">Usé</option>
                                    </select>
                                </div>
                                <div className="w-[20%] flex justify-center py-4 items-center">
                                    <button
                                        className={`button-regular ${editingBaby.available ? '!bg-green-600' : '!bg-gray-600'} text-white px-4 py-1 rounded-full`}
                                        onClick={() => setEditingBaby({ ...editingBaby, available: !editingBaby.available })}
                                    >
                                        {editingBaby.available ? 'Disponible' : 'Occupé'}
                                    </button>
                                </div>
                                <div className="w-[20%] flex justify-center gap-2 py-4">
                                    <button className="button-regular !bg-green-600 hover:!bg-green-700 text-white text-sm px-4 py-2 rounded-full" onClick={() => editingBaby && handleUpdateBabyfoot(editingBaby.id, editingBaby)}>
                                        Enregistrer
                                    </button>
                                    <button className="button-regular !bg-gray-600 hover:!bg-gray-700 text-white text-sm px-4 py-2 rounded-full" onClick={() => setEditingBaby(null)}>
                                        Annuler
                                    </button>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="flex-1 lg:px-8 px-4 py-4 text-center lg:text-left">
                                    <span className="text-lg title">{b.name}</span>
                                </div>
                                <div className="w-[20%] text-center py-4">
                                    <span className="text-lg title opacity-80">{b.gamesPlayed}</span>
                                </div>
                                <div className="w-[20%] text-center py-4">
                                    <span className="text-lg title opacity-80">{b.condition}</span>
                                </div>
                                <div className="w-[20%] flex justify-center py-4 items-center">
                                    <button className={`button-regular ${b.available ? '!bg-green-600' : '!bg-gray-600'} text-white px-4 py-1 rounded-full`} onClick={() => handleUpdateBabyfoot(b.id, { available: !b.available })}>
                                        {b.available ? 'Disponible' : 'Occupé'}
                                    </button>
                                </div>
                                <div className="w-[20%] flex justify-center py-4 gap-2">
                                    <button className="button-regular !bg-yellow-600 hover:!bg-yellow-700 text-white text-sm px-4 py-2 rounded-full" onClick={() => setEditingBaby(b)}>
                                        Modifier
                                    </button>
                                    <button className="button-regular !bg-red-600 hover:!bg-red-700 text-white text-sm px-2 py-2 rounded-full" onClick={() => handleDeleteBabyfoot(b.id)}>
                                        Supprimer
                                    </button>
                                </div>
                            </>
                        )}
                    </AnimatedContainer>
                ))}
                {babyfoots.length === 0 && <p className="text-center text-white/70 mt-6 text-lg">Aucun babyfoot</p>}
            </div>
        </>
    );
};

export default BabyfootTab;
