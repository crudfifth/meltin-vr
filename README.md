# VRCお砂糖イベント＋マッチングWEBサービス

「VRCお砂糖イベント」と連動した、軽量なマッチング機能付きWebサービスです。  
React + NestJS を基盤とし、スモールスタートしやすい構成で設計されています。

---

## 🧩 使用技術スタック

### フロントエンド
- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Zustand](https://zustand-demo.pmnd.rs/)（状態管理）
- [React Hook Form](https://react-hook-form.com/)
- [React Query](https://tanstack.com/query/latest)
- [Framer Motion](https://www.framer.com/motion/)（アニメーション）

### バックエンド
- [NestJS](https://nestjs.com/)
- [PostgreSQL](https://www.postgresql.org/)（DB）
- [Prisma ORM](https://www.prisma.io/)
- [Firebase Auth](https://firebase.google.com/docs/auth)（認証）
- [Firebase Storage / S3](https://aws.amazon.com/jp/s3/)（ファイル保存）
- [SendGrid](https://sendgrid.com/)（メール通知）

### インフラ
- [Vercel](https://vercel.com/)（フロントホスティング）
- [AWS Lambda + API Gateway](https://aws.amazon.com/jp/lambda/)（API運用）
- [GitHub Actions](https://docs.github.com/ja/actions)（CI/CD）
- [Sentry](https://sentry.io/)（エラートラッキング）

---

## 🧱 機能一覧

- ✅ ユーザー登録・ログイン（Firebase Auth）
- ✅ プロフィール編集（自己紹介・画像設定）
- ✅ お砂糖マッチング機能（お相手リスト、自動おすすめ）
- ✅ チャット機能（WebSocket / Firestore or REST）
- ✅ イベント作成・参加申請・承認機能
- ✅ 通知（メール／アプリ）

---

## 🗃️ データベーススキーマ（主要テーブル）

### Users
| フィールド名 | 型 | 説明 |
|--------------|----|------|
| id | UUID | ユーザーID |
| username | VARCHAR | 表示名 |
| email | VARCHAR | メールアドレス |
| avatar | TEXT | アイコンURL |
| bio | TEXT | 自己紹介 |
| created_at | TIMESTAMP | 登録日 |

### Matches
| フィールド名 | 型 | 説明 |
|--------------|----|------|
| id | UUID | マッチングID |
| user1_id | UUID | 片方のユーザーID |
| user2_id | UUID | もう片方のユーザーID |
| status | ENUM | 状態（pending/accepted/rejected） |

### Messages
| フィールド名 | 型 | 説明 |
|--------------|----|------|
| id | UUID | メッセージID |
| match_id | UUID | マッチングID |
| sender_id | UUID | 送信者ID |
| message | TEXT | 内容 |

### Events
| フィールド名 | 型 | 説明 |
|--------------|----|------|
| id | UUID | イベントID |
| host_id | UUID | 主催者ID |
| name | VARCHAR | イベント名 |
| description | TEXT | 詳細 |
| location | TEXT | 開催VRCワールド名 |

---

## 📡 API設計（抜粋）

### 認証
- `POST /auth/register`
- `POST /auth/login`
- `GET /auth/me`

### マッチング
- `GET /matches`
- `POST /matches`
- `PATCH /matches/:id`

### イベント
- `GET /events`
- `POST /events`
- `POST /events/:id/join`

---

## ⚙️ 開発用セットアップ

```bash
# フロント
cd frontend
npm install
npm run dev

# バックエンド
cd backend
npm install
npx prisma generate
npm run start:dev
```

---

## 🚀 デプロイ構成

| 層 | 使用サービス |
|----|---------------|
| フロント | Vercel |
| API | AWS Lambda |
| DB | Supabase（PostgreSQL） |
| 認証 | Firebase Auth |
| ファイル | Firebase Storage / S3 |

---

## 🧪 テスト

| 対象 | 技術 |
|------|------|
| フロントエンド | Jest + Testing Library |
| バックエンドAPI | Jest (NestJS) |
| ORM/DB | Prisma Test |

---

vrc-sugar-app/
├── frontend/               # Next.js + React アプリケーション
│   ├── public/             # 静的ファイル
│   ├── src/
│   │   ├── components/     # 再利用可能なUIコンポーネント
│   │   ├── features/       # ドメイン単位の機能（ユーザー・マッチング等）
│   │   ├── pages/          # Next.js ページ
│   │   ├── hooks/          # カスタムフック
│   │   ├── layouts/        # レイアウトコンポーネント
│   │   ├── styles/         # TailwindCSS / globals
│   │   ├── store/          # Zustand等での状態管理
│   │   ├── services/       # APIラッパー axios 等
│   │   ├── utils/          # 汎用ユーティリティ
│   │   └── types/          # 型定義（TypeScript）
│   ├── .env.local          # 環境変数（フロント用）
│   └── next.config.js
│
├── backend/                # NestJS バックエンド
│   ├── src/
│   │   ├── auth/           # Firebase Auth / JWT連携
│   │   ├── users/          # ユーザー管理
│   │   ├── matches/        # マッチング機能
│   │   ├── events/         # イベント管理
│   │   ├── messages/       # チャット関連
│   │   ├── common/         # 共通モジュール（フィルター、ガード等）
│   │   ├── prisma/         # Prisma設定とClient
│   │   └── main.ts         # アプリエントリポイント
│   ├── prisma/
│   │   └── schema.prisma   # Prismaスキーマ定義
│   ├── test/               # テスト
│   ├── .env                # 環境変数（バックエンド用）
│   └── nest-cli.json
│
├── docs/                   # ドキュメント・仕様など
├── .github/                # GitHub Actionsなどの設定
├── README.md
└── package.json            # mono-repoにしたい場合のみ（Yarn workspaces対応可）


---
