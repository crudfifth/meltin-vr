"use client";

import { useState } from "react";

type Event = {
  id: number;
  title: string;
  description: string;
  datetime: string;
  joined: boolean;
};

const mockEvents: Event[] = [
  {
    id: 1,
    title: "VRお茶会🍵",
    description: "まったり過ごすバーチャルティーパーティー",
    datetime: "2025-04-10 20:00",
    joined: false,
  },
  {
    id: 2,
    title: "黒猫亭ナイトバー🍸",
    description: "交流メインのナイトイベント。誰でも歓迎！",
    datetime: "2025-04-14 22:00",
    joined: false,
  },
];

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>(mockEvents);

  const handleJoin = (id: number) => {
    setEvents((prev) =>
      prev.map((e) =>
        e.id === id ? { ...e, joined: true } : e
      )
    );
  };

  return (
    <main className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-2xl font-bold mb-6">🎉 参加可能なイベント一覧</h1>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white shadow-md rounded-xl p-4 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-lg font-semibold mb-1">{event.title}</h2>
              <p className="text-sm text-gray-600 mb-2">{event.description}</p>
              <p className="text-sm text-gray-500">📅 {event.datetime}</p>
            </div>
            <div className="mt-4">
              {event.joined ? (
                <span className="text-green-600 font-bold">✅ 参加済</span>
              ) : (
                <button
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
                  onClick={() => handleJoin(event.id)}
                >
                  参加する
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
