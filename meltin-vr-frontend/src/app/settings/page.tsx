"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SettingsPage() {
  const router = useRouter();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const handleLogout = () => {
    if (confirm("ログアウトしますか？")) {
      // 後ほど Zustand/セッション情報をクリア処理に変更
      alert("ログアウトしました（仮）");
      router.push("/login");
    }
  };

  return (
    <main className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-2xl font-bold mb-6">⚙️ 設定</h1>

      <div className="space-y-6 max-w-md">
        {/* 通知設定 */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">通知設定</h2>
          <div className="flex items-center justify-between">
            <span>通知を有効にする</span>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only"
                checked={notificationsEnabled}
                onChange={() => setNotificationsEnabled((prev) => !prev)}
              />
              <div className={`w-10 h-6 rounded-full transition-colors ${
                notificationsEnabled ? "bg-indigo-600" : "bg-gray-300"
              }`}>
                <div className={`w-4 h-4 bg-white rounded-full shadow transform transition-transform ${
                  notificationsEnabled ? "translate-x-5" : "translate-x-1"
                }`} />
              </div>
            </label>
          </div>
        </div>

        {/* ログアウト */}
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-lg font-semibold mb-2">アカウント</h2>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            onClick={handleLogout}
          >
            ログアウト
          </button>
        </div>
      </div>
    </main>
  );
}
