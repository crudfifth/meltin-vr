"use client";

import { useState } from "react";

type Message = {
  sender: string;
  text: string;
};

const mockUsers = ["miru", "kuro", "meltin"];

export default function ChatPage() {
  const [selectedUser, setSelectedUser] = useState<string>("miru");
  const [messages, setMessages] = useState<Message[]>([
    { sender: "miru", text: "こんにちは！" },
    { sender: "toto", text: "やっほー" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { sender: "toto", text: input }]);
    setInput("");
  };

  return (
    <main className="min-h-screen flex">
      {/* ユーザーリスト */}
      <aside className="w-1/4 bg-gray-100 p-4 border-r">
        <h2 className="text-lg font-semibold mb-4">チャット相手</h2>
        <ul className="space-y-2">
          {mockUsers.map((user) => (
            <li key={user}>
              <button
                onClick={() => setSelectedUser(user)}
                className={`block w-full text-left px-4 py-2 rounded-md ${
                  user === selectedUser
                    ? "bg-indigo-500 text-white"
                    : "hover:bg-gray-200"
                }`}
              >
                {user}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* チャットエリア */}
      <section className="flex-1 p-6 flex flex-col">
        <h2 className="text-xl font-bold mb-4">💬 {selectedUser} さんとのチャット</h2>

        {/* メッセージログ */}
        <div className="flex-1 bg-white rounded-md shadow-inner p-4 mb-4 overflow-y-auto">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-2 ${
                msg.sender === "toto" ? "text-right" : "text-left"
              }`}
            >
              <span
                className={`inline-block px-3 py-2 rounded-lg ${
                  msg.sender === "toto"
                    ? "bg-indigo-100 text-indigo-800"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {msg.text}
              </span>
            </div>
          ))}
        </div>

        {/* 入力フォーム */}
        <form onSubmit={handleSend} className="flex gap-2">
          <input
            type="text"
            className="flex-1 border rounded-md px-4 py-2"
            placeholder="メッセージを入力..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
          >
            送信
          </button>
        </form>
      </section>
    </main>
  );
}
