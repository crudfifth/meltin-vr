"use client";

import { useState } from "react";

export default function BioPage() {
  const [bio, setBio] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`自己紹介を更新しました：\n\n${bio}`);
  };

  return (
    <main className="min-h-screen p-6 bg-pink-50">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-6">
        <h1 className="text-xl font-bold mb-4 text-pink-600">✍️ 自己紹介の編集</h1>
        <form onSubmit={handleSubmit}>
          <textarea
            className="w-full h-32 border border-pink-200 rounded p-2 mb-4"
            placeholder="自己紹介を入力..."
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
          >
            保存
          </button>
        </form>
      </div>
    </main>
  );
}
