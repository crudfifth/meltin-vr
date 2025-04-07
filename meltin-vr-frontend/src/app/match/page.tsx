"use client";

import { useState } from "react";

type User = {
  id: number;
  name: string;
  bio: string;
  avatarUrl: string;
  matched: boolean;
};

const mockCandidates: User[] = [
  {
    id: 1,
    name: "miru",
    bio: "イベントと紅茶が好きなVTuber！",
    avatarUrl: "https://placehold.co/80x80/8ab4f8/fff?text=miru",
    matched: false,
  },
  {
    id: 2,
    name: "kuro",
    bio: "おっとり系の猫耳っ子です。",
    avatarUrl: "https://placehold.co/80x80/f78fb3/fff?text=kuro",
    matched: false,
  },
  {
    id: 3,
    name: "meltin",
    bio: "VRイベント主催してます。お話しませんか？",
    avatarUrl: "https://placehold.co/80x80/a2d2a2/fff?text=meltin",
    matched: false,
  },
];

export default function MatchPage() {
  const [candidates, setCandidates] = useState<User[]>(mockCandidates);

  const handleMatch = (id: number) => {
    setCandidates((prev) =>
      prev.map((user) =>
        user.id === id ? { ...user, matched: true } : user
      )
    );
  };

  return (
    <main className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-2xl font-bold mb-6">💞 マッチング候補一覧</h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {candidates.map((user) => (
          <div
            key={user.id}
            className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center text-center"
          >
            <img
              src={user.avatarUrl}
              alt={user.name}
              className="w-20 h-20 rounded-full mb-4"
            />
            <h2 className="text-lg font-semibold">{user.name}</h2>
            <p className="text-sm text-gray-600 mb-4">{user.bio}</p>
            {user.matched ? (
              <span className="text-green-600 font-bold">✔️ マッチ済</span>
            ) : (
              <button
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
                onClick={() => handleMatch(user.id)}
              >
                マッチする
              </button>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
