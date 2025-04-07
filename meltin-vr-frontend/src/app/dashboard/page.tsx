import Link from "next/link";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-pink-50 p-6">
      <h1 className="text-3xl font-bold text-pink-600 mb-8 text-center">
        ようこそ、Meltin VR ダッシュボードへ
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* プロフィール情報 */}
        <section className="bg-white/80 backdrop-blur-md rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-indigo-500 mb-2">👤 プロフィール</h2>
          <ul className="text-gray-700 list-disc list-inside text-sm space-y-1">
            <li>
              <Link href="/profile/edit" className="text-pink-500 hover:underline">
                プロフィールの表示・編集
              </Link>
            </li>
            <li>
              <Link href="/profile/avatar" className="text-pink-500 hover:underline">
                アバター変更
              </Link>
            </li>
            <li>
              <Link href="/profile/bio" className="text-pink-500 hover:underline">
                自己紹介の編集
              </Link>
            </li>
            <li>
              <Link href="/profile/status" className="text-pink-500 hover:underline">
                ステータス変更
              </Link>
            </li>
          </ul>
        </section>

        {/* マッチング機能 */}
        <section className="bg-white/80 backdrop-blur-md rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-pink-500 mb-2">💕 マッチング</h2>
          <ul className="text-gray-700 list-disc list-inside text-sm space-y-1">
            <li>
              <Link href="/match" className="text-pink-500 hover:underline">
                マッチ候補ユーザーの表示
              </Link>
            </li>
            <li>
              <Link href="/match/history" className="text-pink-500 hover:underline">
                マッチ済ユーザーの一覧
              </Link>
            </li>
            <li>
              <Link href="/chat" className="text-pink-500 hover:underline">
                チャット画面へ
              </Link>
            </li>
          </ul>
        </section>

        {/* イベント管理 */}
        <section className="bg-white/80 backdrop-blur-md rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-purple-500 mb-2">🎉 イベント</h2>
          <ul className="text-gray-700 list-disc list-inside text-sm space-y-1">
            <li>
              <Link href="/events" className="text-pink-500 hover:underline">
                参加可能なイベント一覧
              </Link>
            </li>
            <li>
              <Link href="/events/host" className="text-pink-500 hover:underline">
                主催イベントの管理
              </Link>
            </li>
          </ul>
        </section>

        {/* 通知と設定 */}
        <section className="bg-white/80 backdrop-blur-md rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-yellow-500 mb-2">🔔 通知・その他</h2>
          <ul className="text-gray-700 list-disc list-inside text-sm space-y-1">
            <li>
              <Link href="/notifications" className="text-pink-500 hover:underline">
                お知らせ通知の一覧
              </Link>
            </li>
            <li>
              <Link href="/settings" className="text-pink-500 hover:underline">
                設定（ログアウト・通知設定）
              </Link>
            </li>
            <li>
              <Link href="/help" className="text-pink-500 hover:underline">
                ヘルプ・利用ガイド
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
