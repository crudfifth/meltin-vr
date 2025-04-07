"use client";

import { useState } from "react";

export default function AvatarPage() {
  const [avatar, setAvatar] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setAvatar(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (!avatar) return;
    alert(`アバター「${avatar.name}」をアップロードしました（仮）`);
  };

  return (
    <main className="min-h-screen p-6 bg-pink-50">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-6">
        <h1 className="text-xl font-bold mb-4 text-pink-600">🖼️ アバター変更</h1>
        <input type="file" accept="image/*" onChange={handleChange} className="mb-4" />
        <button
          disabled={!avatar}
          onClick={handleUpload}
          className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 disabled:opacity-50"
        >
          アップロード
        </button>
      </div>
    </main>
  );
}
