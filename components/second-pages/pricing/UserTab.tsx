'use client';
import React, { useState, useEffect } from 'react';
import AnimatedContainer from '@/components/AnimatedContainer';
import axios from 'axios';

type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
};

const mockUsers: User[] = [
  { id: 1, firstName: 'Alice', lastName: 'Dupont', email: 'alice.dupont@example.com' },
  { id: 2, firstName: 'Lucas', lastName: 'Martin', email: 'lucas.martin@example.com' },
  { id: 3, firstName: 'Sophie', lastName: 'Bernard', email: 'sophie.bernard@example.com' },
  { id: 4, firstName: 'Nathan', lastName: 'Lemoine', email: 'nathan.lemoine@example.com' },
  { id: 5, firstName: 'Clara', lastName: 'Moreau', email: 'clara.moreau@example.com' }
];

const UserTab = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get<User[]>('/api/users');
        setUsers(res.data);
      } catch (err) {
        console.warn('API non dispo, utilisation des mock', err);
        setUsers(mockUsers);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const handleDeleteUser = async (id: number) => {
    setUsers(prev => prev.filter(u => u.id !== id));
    try {
      await axios.delete(`/api/users/${id}`);
    } catch (err) {
      console.warn('API DELETE non dispo', err);
    }
  };

  const handleSaveUser = async () => {
    if (!editingUser) return;
    setUsers(prev => prev.map(u => (u.id === editingUser.id ? editingUser : u)));
    try {
      await axios.put(`/api/users/${editingUser.id}`, editingUser);
    } catch (err) {
      console.warn('API PUT non dispo', err);
    }
    setEditingUser(null);
  };

  if (loading) return <p className="text-white text-center">Chargement...</p>;

  return (
    <>
      {/* En-tête du tableau */}
      <div className="lg:flex hidden items-center bg-white/16 rounded-full border border-white/8 backdrop-blur-[48px]">
        <div className="flex-1 px-8 py-4"><span className="text-xl font-medium title">Nom</span></div>
        <div className="flex-1 px-8 py-4"><span className="text-xl font-medium title">Prénom</span></div>
        <div className="flex-1 px-8 py-4"><span className="text-xl font-medium title">Email</span></div>
        <div className="w-[20%] px-8 py-4 text-center"><span className="text-xl font-medium title">Action</span></div>
      </div>

      <div className="mt-3">
        {users.map((user, index) => (
          <AnimatedContainer key={user.id} delay={index * 150} className="flex lg:flex-row flex-col lg:border-b border-white/12 border-dashed last:border-none items-center">
            {editingUser?.id === user.id ? (
              <>
                <div className="flex-1 lg:px-8 px-4 py-4 text-center lg:text-left">
                  <input
                    type="text"
                    className="bg-white/10 px-3 py-2 rounded-full text-white w-full"
                    value={editingUser.lastName}
                    onChange={(e) => setEditingUser({ ...editingUser, lastName: e.target.value })}
                  />
                </div>
                <div className="flex-1 lg:px-8 px-4 py-4 text-center lg:text-left">
                  <input
                    type="text"
                    className="bg-white/10 px-3 py-2 rounded-full text-white w-full"
                    value={editingUser.firstName}
                    onChange={(e) => setEditingUser({ ...editingUser, firstName: e.target.value })}
                  />
                </div>
                <div className="flex-1 lg:px-8 px-4 py-4 text-center lg:text-left">
                  <input
                    type="email"
                    className="bg-white/10 px-3 py-2 rounded-full text-white w-full"
                    value={editingUser.email}
                    onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
                  />
                </div>
                <div className="w-[20%] flex justify-center gap-2 py-4">
                  <button
                    className="button-regular !bg-green-600 hover:!bg-green-700 text-white text-sm px-4 py-2 rounded-full"
                    onClick={handleSaveUser}
                  >
                    Enregistrer
                  </button>
                  <button
                    className="button-regular !bg-gray-600 hover:!bg-gray-700 text-white text-sm px-4 py-2 rounded-full"
                    onClick={() => setEditingUser(null)}
                  >
                    Annuler
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="flex-1 lg:px-8 px-4 py-4 text-center lg:text-left">
                  <span className="text-lg title">{user.lastName}</span>
                </div>
                <div className="flex-1 lg:px-8 px-4 py-4 text-center lg:text-left">
                  <span className="text-lg title">{user.firstName}</span>
                </div>
                <div className="flex-1 lg:px-8 px-4 py-4 text-center lg:text-left">
                  <span className="text-lg title opacity-80">{user.email}</span>
                </div>
                <div className="w-[20%] flex justify-center gap-2 py-4">
                  <button
                    className="button-regular !bg-yellow-600 hover:!bg-yellow-700 text-white text-sm px-4 py-2 rounded-full"
                    onClick={() => setEditingUser(user)}
                  >
                    Modifier
                  </button>
                  <button
                    className="button-regular !bg-red-600 hover:!bg-red-700 text-white text-sm px-4 py-2 rounded-full"
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    Supprimer
                  </button>
                </div>
              </>
            )}
          </AnimatedContainer>
        ))}
        {users.length === 0 && <p className="text-center text-white/70 mt-6 text-lg">Aucun utilisateur</p>}
      </div>
    </>
  );
};

export default UserTab;
