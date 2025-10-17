'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

type User = {
    id: number;
    name: string;
    email: string;
};

const mockUsers: User[] = [
    { id: 1, name: 'Alice Dupont', email: 'alice.dupont@example.com' },
    { id: 2, name: 'Lucas Martin', email: 'lucas.martin@example.com' },
    { id: 3, name: 'Sophie Bernard', email: 'sophie.bernard@example.com' },
    { id: 4, name: 'Nathan Lemoine', email: 'nathan.lemoine@example.com' },
    { id: 5, name: 'Clara Moreau', email: 'clara.moreau@example.com' }
];

const UserTab = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [editingUser, setEditingUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await axios.get<User[]>('http://localhost:8080/api/users/all');
                setUsers(res.data);
            } catch (err) {
                console.warn('API non dispo, utilisation des mocks', err);
                setUsers(mockUsers);
            } finally {
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);

    const handleDeleteUser = async (id: number) => {
        setUsers((prev) => prev.filter((u) => u.id !== id));
        try {
            await axios.delete(`http://localhost:8080/api/users/${id}`);
        } catch (err) {
            console.warn('API DELETE non dispo', err);
        }
    };

    const handleSaveUser = async () => {
        if (!editingUser) return;
        setUsers((prev) => prev.map((u) => (u.id === editingUser.id ? editingUser : u)));
        try {
            await axios.put(`http://localhost:8080/api/users/${editingUser.id}`, editingUser);
        } catch (err) {
            console.warn('API PUT non dispo', err);
        }
        setEditingUser(null);
    };

    if (loading) return <p className="text-white text-center">Chargement...</p>;

    return (
        <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
            <table className="w-full text-sm text-left text-gray-600 dark:text-gray-300 rounded-lg">
                <thead className="text-xs uppercase bg-gray-100 dark:bg-gray-600 dark:text-gray-300">
                    <tr>
                        <th scope="col" className="px-6 py-4">
                            Nom
                        </th>
                        <th scope="col" className="px-6 py-4">
                            Email
                        </th>
                        <th scope="col" className="px-6 py-4 text-center">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id} className="bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                            {editingUser?.id === user.id ? (
                                <>
                                    <td className="px-6 py-4">
                                        <input
                                            type="text"
                                            value={editingUser.name}
                                            onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })}
                                            className="w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white px-2 py-1 rounded"
                                        />
                                    </td>
                                    <td className="px-6 py-4">
                                        <input
                                            type="email"
                                            value={editingUser.email}
                                            onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
                                            className="w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white px-2 py-1 rounded"
                                        />
                                    </td>
                                    <td className="px-6 py-4 text-center flex justify-center gap-2">
                                        <button onClick={handleSaveUser} className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm transition-all">
                                            Enregistrer
                                        </button>
                                        <button onClick={() => setEditingUser(null)} className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-full text-sm transition-all">
                                            Annuler
                                        </button>
                                    </td>
                                </>
                            ) : (
                                <>
                                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{user.name}</td>
                                    <td className="px-6 py-4 opacity-80">{user.email}</td>
                                    <td className="px-6 py-4 text-center flex justify-center gap-2">
                                        <button onClick={() => setEditingUser(user)} className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-full text-sm transition-all">
                                            Modifier
                                        </button>
                                        <button onClick={() => handleDeleteUser(user.id)} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full text-sm transition-all">
                                            Supprimer
                                        </button>
                                    </td>
                                </>
                            )}
                        </tr>
                    ))}
                    {users.length === 0 && (
                        <tr>
                            <td colSpan={3} className="text-center py-4 text-gray-500 dark:text-gray-400">
                                Aucun utilisateur
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default UserTab;
