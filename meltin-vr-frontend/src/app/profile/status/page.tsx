"use client";

import { useState } from "react";

export default function StatusPage() {
  const [status, setStatus] = useState("online");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value);
  };

  const handleSave = () => {
    alert(`ステータスを「${status}」に変更しました（仮）`);
  };

  return (
    <main className="min-h-screen p-6 bg-pink-50">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-6">
        <h1 className="text-xl font-bold mb-4 text-pink-600">🔄 ステータス変更</h1>
        <select
          value={status}
          onChange={handleChange}
          className="w-full p-2 border border-pink-200 rounded mb-4"
        >
          <option value="online">🟢 オンライン</option>
          <option value="away">🟡 離席中</option>
          <option value="busy">🔴 忙しい</option>
          <option value="offline">⚫ オフライン</option>
        </select>
        <button
          onClick={handleSave}
          className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600"
        >
          保存
        </button>
      </div>
    </main>
  );
}
