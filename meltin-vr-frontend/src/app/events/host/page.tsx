"use client";

import { useState } from "react";

type Event = {
  id: number;
  title: string;
  description: string;
  datetime: string;
};

const mockHostedEvents: Event[] = [
  {
    id: 1,
    title: "Meltin VR 主催 お絵描き大会🎨",
    description: "描いて話して繋がろう！参加型イベント。",
    datetime: "2025-04-20 21:00",
  },
  {
    id: 2,
    title: "バーチャル音楽会🎵",
    description: "DJ・演奏者・視聴者みんなで楽しむVR音楽イベント。",
    datetime: "2025-04-28 19:30",
  },
];

export default function EventsHostPage() {
  const [hostedEvents, setHostedEvents] = useState<Event[]>(mockHostedEvents);

  const handleDelete = (id: number) => {
    if (confirm("このイベントを削除しますか？")) {
      setHostedEvents((prev) => prev.filter((event) => event.id !== id));
    }
  };

  const handleEdit = (id: number) => {
    alert(`イベント ID: ${id} を編集（未実装）`);
  };

  return (
    <main className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-2xl font-bold mb-6">🛠️ 主催イベント管理</h1>

      {hostedEvents.length === 0 ? (
        <p className="text-gray-500">現在、主催しているイベントはありません。</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          {hostedEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white shadow-md rounded-xl p-4 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-lg font-semibold mb-1">{event.title}</h2>
                <p className="text-sm text-gray-600 mb-2">{event.description}</p>
                <p className="text-sm text-gray-500">📅 {event.datetime}</p>
              </div>

              <div className="mt-4 flex justify-end gap-2">
                <button
                  className="text-sm px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500"
                  onClick={() => handleEdit(event.id)}
                >
                  編集
                </button>
                <button
                  className="text-sm px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  onClick={() => handleDelete(event.id)}
                >
                  削除
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
