"use client";

import { useState } from "react";

export default function ProfileEditPage() {
  const [name, setName] = useState("toto");
  const [bio, setBio] = useState("はじめまして！Meltin VRユーザーです。");
  const [avatarUrl, setAvatarUrl] = useState("https://example.com/avatar.png");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`プロフィール更新\n名前: ${name}\n自己紹介: ${bio}\n画像URL: ${avatarUrl}`);
    // 将来的にAPI or Zustand更新処理へ
  };

  return (
    <main className="min-h-screen bg-gray-50 p-6 flex justify-center items-center">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-bold mb-6 text-center">プロフィール編集</h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">名前</label>
            <input
              type="text"
              className="w-full border rounded-md p-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">自己紹介</label>
            <textarea
              className="w-full border rounded-md p-2"
              rows={4}
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">プロフィール画像URL</label>
            <input
              type="url"
              className="w-full border rounded-md p-2"
              value={avatarUrl}
              onChange={(e) => setAvatarUrl(e.target.value)}
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition"
            >
              保存する
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
