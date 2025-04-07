"use client";

import { useState } from "react";

type Notification = {
  id: number;
  message: string;
  sender: string;
  datetime: string;
  read: boolean;
};

const mockNotifications: Notification[] = [
  {
    id: 1,
    message: "miru さんとマッチしました！",
    sender: "システム",
    datetime: "2025-04-06 10:15",
    read: false,
  },
  {
    id: 2,
    message: "『VRお茶会🍵』が間もなく始まります。",
    sender: "イベント管理",
    datetime: "2025-04-06 19:45",
    read: false,
  },
  {
    id: 3,
    message: "黒猫亭ナイトバーに参加リクエストが届いています。",
    sender: "イベント参加者",
    datetime: "2025-04-05 23:10",
    read: true,
  },
];

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);

  const markAsRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  return (
    <main className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-2xl font-bold mb-6">🔔 お知らせ通知一覧</h1>

      {notifications.length === 0 ? (
        <p className="text-gray-500">通知はありません。</p>
      ) : (
        <div className="space-y-4">
          {notifications.map((n) => (
            <div
              key={n.id}
              className={`p-4 rounded-lg shadow-md ${
                n.read ? "bg-white text-gray-400" : "bg-indigo-50 text-gray-800"
              }`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium">{n.message}</p>
                  <p className="text-sm text-gray-500">
                    from: {n.sender} / {n.datetime}
                  </p>
                </div>
                {!n.read && (
                  <button
                    onClick={() => markAsRead(n.id)}
                    className="text-sm px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700"
                  >
                    既読にする
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
