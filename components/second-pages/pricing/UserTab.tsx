"use client";
import React, { useState } from "react";
import AnimatedContainer from "@/components/AnimatedContainer";


type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  isEditing?: boolean;
};

const initialUsers: User[] = [
  { id: 1, firstName: "Alice", lastName: "Dupont", email: "alice.dupont@example.com" },
  { id: 2, firstName: "Lucas", lastName: "Martin", email: "lucas.martin@example.com" },
  { id: 3, firstName: "Sophie", lastName: "Bernard", email: "sophie.bernard@example.com" },
];
const UserTab = () => {
 // === UTILISATEURS ===
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  const handleDeleteUser = (id: number) => setUsers((prev) => prev.filter((u) => u.id !== id));

  const handleEditUser = (user: User) => setEditingUser(user);

  const handleSaveUser = () => {
    if (!editingUser) return;
    setUsers((prev) =>
      prev.map((u) => (u.id === editingUser.id ? editingUser : u))
    );
    setEditingUser(null);
  };
  return (
    <>
            <div className="lg:flex hidden items-center bg-white/16 rounded-full border border-white/8 backdrop-blur-[48px]">
              <div className="flex-1 px-8 py-4">
                <span className="text-xl font-medium title">Nom</span>
              </div>
              <div className="flex-1 px-8 py-4">
                <span className="text-xl font-medium title">Prénom</span>
              </div>
              <div className="flex-1 px-8 py-4">
                <span className="text-xl font-medium title">Email</span>
              </div>
              <div className="w-[20%] px-8 py-4 text-center">
                <span className="text-xl font-medium title">Action</span>
              </div>
            </div>

            <div className="mt-3">
              {users.map((user, index) => (
                <AnimatedContainer
                  key={user.id}
                  delay={index * 150}
                  className="flex lg:flex-row flex-col lg:border-b border-white/12 border-dashed last:border-none items-center"
                >
                  {editingUser?.id === user.id ? (
                    <>
                      <div className="flex-1 lg:px-8 px-4 py-4 text-center lg:text-left">
                        <input
                          type="text"
                          className="bg-white/10 px-3 py-2 rounded-full text-white w-full"
                          value={editingUser.lastName}
                          onChange={(e) =>
                            setEditingUser({ ...editingUser, lastName: e.target.value })
                          }
                        />
                      </div>
                      <div className="flex-1 lg:px-8 px-4 py-4 text-center lg:text-left">
                        <input
                          type="text"
                          className="bg-white/10 px-3 py-2 rounded-full text-white w-full"
                          value={editingUser.firstName}
                          onChange={(e) =>
                            setEditingUser({ ...editingUser, firstName: e.target.value })
                          }
                        />
                      </div>
                      <div className="flex-1 lg:px-8 px-4 py-4 text-center lg:text-left">
                        <input
                          type="email"
                          className="bg-white/10 px-3 py-2 rounded-full text-white w-full"
                          value={editingUser.email}
                          onChange={(e) =>
                            setEditingUser({ ...editingUser, email: e.target.value })
                          }
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
                          onClick={() => handleEditUser(user)}
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
                </AnimatedContainer>))}
              {users.length === 0 && (
                <p className="text-center text-white/70 mt-6 text-lg">Aucun utilisateur</p>
              )}
            </div>
          </>
    );
};
export default UserTab;