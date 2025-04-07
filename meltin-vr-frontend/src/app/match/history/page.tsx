"use client";

import { useState } from "react";

type User = {
  id: number;
  name: string;
  bio: string;
  avatarUrl: string;
};

const mockMatchedUsers: User[] = [
  {
    id: 1,
    name: "miru",
    bio: "イベントと紅茶が好きなVTuber！",
    avatarUrl: "https://placehold.co/80x80/8ab4f8/fff?text=miru",
  },
  {
    id: 3,
    name: "meltin",
    bio: "VRイベント主催してます。お話しませんか？",
    avatarUrl: "https://placehold.co/80x80/a2d2a2/fff?text=meltin",
  },
];

export default function MatchHistoryPage() {
  const [matchedUsers] = useState<User[]>(mockMatchedUsers);

  return (
    <main className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-2xl font-bold mb-6">💑 マッチ済ユーザー一覧</h1>

      {matchedUsers.length === 0 ? (
        <p className="text-gray-500">まだマッチ済ユーザーがいません。</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {matchedUsers.map((user) => (
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
              <button
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
                onClick={() => alert(`${user.name} さんとのチャットへ（未実装）`)}
              >
                チャットを開く
              </button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
