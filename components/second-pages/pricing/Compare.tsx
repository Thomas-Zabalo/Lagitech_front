"use client";
import React, { useState } from "react";
import AnimatedContainer from "@/components/AnimatedContainer";
import UserTab from "./UserTab";
import BabyfootTab from "./BabyfootTab";

const UserManagementTable = () => {
  const [activeTab, setActiveTab] = useState<"users" | "babyfoots">("users");

  return (
    <div className="container mt-16">
      {/* Menu principal */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          className={`button-regular px-6 py-2 rounded-full transition-all ${
            activeTab === "users" ? "bg-white/20" : "bg-white/10 hover:bg-white/20"
          }`}
          onClick={() => setActiveTab("users")}
        >
          Utilisateurs
        </button>
        <button
          className={`button-regular px-6 py-2 rounded-full transition-all ${
            activeTab === "babyfoots" ? "bg-white/20" : "bg-white/10 hover:bg-white/20"
          }`}
          onClick={() => setActiveTab("babyfoots")}
        >
          Babyfoots
        </button>
      </div>

      <div className="rounded-3xl lg:rounded-4xl bg-main-gradient-to-top overflow-hidden relative p-6 lg:p-7 shadow-black-card">
        {/* ==== VUE UTILISATEURS ==== */}
        {activeTab === "users" && (
          <UserTab/>
        )}

        {/* ==== VUE BABYFOOTS ==== */}
        {activeTab === "babyfoots" && (
          <BabyfootTab/>
        )}
      </div>
    </div>
  );
};

export default UserManagementTable;
