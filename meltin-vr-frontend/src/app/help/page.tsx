export default function HelpPage() {
  return (
    <main className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-2xl font-bold mb-6">❓ ヘルプ・利用ガイド</h1>

      <div className="space-y-6 bg-white shadow-md rounded-xl p-6 max-w-3xl">
        <section>
          <h2 className="text-lg font-semibold mb-2">🔹 Meltin VRとは？</h2>
          <p className="text-gray-700 text-sm">
            Meltin VRは、バーチャル上での交流やイベント参加、マッチングを通して、人とつながるための新しい空間を提供するプラットフォームです。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">🔹 マッチングの仕組み</h2>
          <p className="text-gray-700 text-sm">
            気になるユーザーに「マッチする」ボタンを押すことで、相互マッチが成立し、チャットが可能になります。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">🔹 イベント参加方法</h2>
          <p className="text-gray-700 text-sm">
            「参加可能なイベント」から参加したいイベントを選び、「参加する」ボタンを押してください。イベント開始前には通知も届きます。
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">🔹 トラブルが発生したら</h2>
          <p className="text-gray-700 text-sm">
            不具合や荒らし行為などを発見した場合は、画面右下の「サポート」ボタンまたは <a href="mailto:support@meltinvr.jp" className="text-indigo-600 underline">support@meltinvr.jp</a> までご連絡ください。
          </p>
        </section>
      </div>
    </main>
  );
}
