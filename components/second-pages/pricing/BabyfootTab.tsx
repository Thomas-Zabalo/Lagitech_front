"use client";
import React, { useState } from "react";
import AnimatedContainer from "@/components/AnimatedContainer";

type Babyfoot = {
  id: number;
  name: string;
  gamesPlayed: number;
  condition: string;
  available: boolean;
};
const initialBabyfoots: Babyfoot[] = [
  { id: 1, name: "Babyfoot Salle A", gamesPlayed: 42, condition: "Bon", available: true },
  { id: 2, name: "Babyfoot Salle B", gamesPlayed: 75, condition: "Moyen", available: false },
];
const BabyfootTab = () => {
    // === BABYFOOTS ===
      const [babyfoots, setBabyfoots] = useState<Babyfoot[]>(initialBabyfoots);
      const [newBaby, setNewBaby] = useState({ name: "", gamesPlayed: 0, condition: "Bon", available: true });
    
      const handleAddBabyfoot = () => {
        if (newBaby.name.trim() === "") return;
        const newItem: Babyfoot = { id: Date.now(), ...newBaby };
        setBabyfoots((prev) => [...prev, newItem]);
        setNewBaby({ name: "", gamesPlayed: 0, condition: "Bon", available: true });
      };
    
      const handleDeleteBabyfoot = (id: number) => {
        setBabyfoots((prev) => prev.filter((b) => b.id !== id));
      };
    
      const handleUpdateBabyfoot = (id: number, field: keyof Babyfoot, value: any) => {
        setBabyfoots((prev) =>
          prev.map((b) => (b.id === id ? { ...b, [field]: value } : b))
        );
      };
  return (
        <>
            {/* Formulaire d'ajout */}
            <div className="flex flex-col lg:flex-row gap-3 mb-6">
              <input
                type="text"
                placeholder="Nom du babyfoot"
                className="flex-1 bg-white/10 rounded-full px-4 py-2 text-white placeholder-white/60"
                value={newBaby.name}
                onChange={(e) => setNewBaby({ ...newBaby, name: e.target.value })}
              />
              <input
                type="number"
                placeholder="Nombre de parties"
                className="w-40 bg-white/10 rounded-full px-4 py-2 text-white placeholder-white/60"
                value={newBaby.gamesPlayed}
                onChange={(e) => setNewBaby({ ...newBaby, gamesPlayed: Number(e.target.value) })}
              />
              <select
                className="bg-white/10 rounded-full px-4 py-2 text-white"
                value={newBaby.condition}
                onChange={(e) => setNewBaby({ ...newBaby, condition: e.target.value })}
              >
                <option value="Bon">Bon</option>
                <option value="Moyen">Moyen</option>
                <option value="Usé">Usé</option>
              </select>
              <button
                className="button-regular !bg-green-600 hover:!bg-green-700 text-white text-sm px-6 py-2 rounded-full transition-all"
                onClick={handleAddBabyfoot}
              >
                Ajouter
              </button>
            </div>

            {/* Tableau des babyfoots */}
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
              <div className="w-[10%] px-8 py-4 text-center">
                <span className="text-xl font-medium title">Action</span>
              </div>
            </div>

            <div className="mt-3">
              {babyfoots.map((b, index) => (
                <AnimatedContainer
                  key={b.id}
                  delay={index * 150}
                  className="flex lg:flex-row flex-col lg:border-b border-white/12 border-dashed last:border-none items-center"
                >
                  <div className="flex-1 lg:px-8 px-4 py-4 text-center lg:text-left">
                    <span className="text-lg title">{b.name}</span>
                  </div>
                  <div className="w-[20%] text-center py-4">
                    <span className="text-lg title opacity-80">{b.gamesPlayed}</span>
                  </div>
                  <div className="w-[20%] text-center py-4">
                    <select
                      className="bg-white/10 rounded-full px-2 py-1 text-white"
                      value={b.condition}
                      onChange={(e) => handleUpdateBabyfoot(b.id, "condition", e.target.value)}
                    >
                      <option value="Bon">Bon</option>
                      <option value="Moyen">Moyen</option>
                      <option value="Usé">Usé</option>
                    </select>
                  </div>
                  {/* Alignement corrigé de la dispo */}
                  <div className="w-[20%] flex justify-center py-4 items-center">
                    <button
                      className={`button-regular ${
                        b.available ? "!bg-green-600" : "!bg-gray-600"
                      } text-white px-4 py-1 rounded-full`}
                      onClick={() => handleUpdateBabyfoot(b.id, "available", !b.available)}
                    >
                      {b.available ? "Disponible" : "Occupé"}
                    </button>
                  </div>
                  <div className="w-[10%] flex justify-center py-4">
                    <button
                      className="button-regular !bg-red-600 hover:!bg-red-700 text-white text-sm px-4 py-2 rounded-full"
                      onClick={() => handleDeleteBabyfoot(b.id)}
                    >
                      Supprimer
                    </button>
                  </div>
                </AnimatedContainer>
              ))}
              {babyfoots.length === 0 && (
                <p className="text-center text-white/70 mt-6 text-lg">Aucun babyfoot</p>
              )}
            </div>
          </>
    );
};
export default BabyfootTab;