# Astro + microCMS ブログサイト

AstroフレームワークとmicroCMSを連携させたモダンなブログサイトです。SSG（Static Site Generation）による高速なコンテンツ配信と、SSGFormによる安全なお問い合わせフォームを実装しています。

## 🚀 主な機能

- **ブログシステム**: microCMSと連携した動的コンテンツ管理
- **お問い合わせフォーム**: SSGFormによる安全なフォーム処理
- **レスポンシブデザイン**: モバイルファーストのUI/UX
- **SEO最適化**: メタタグ、構造化データ、サイトマップ対応
- **高速配信**: AstroのSSGによる静的サイト生成

## 🛠 使用技術

- **フレームワーク**: Astro 5.14.5
- **スタイリング**: SCSS
- **CMS**: microCMS
- **フォーム**: SSGForm
- **デプロイ**: Cloudflare Pages
- **コードフォーマット**: Prettier

## 📁 プロジェクト構造

```
/
├── public/
│   ├── assets/img/          # 画像ファイル
│   ├── favicon.svg         # ファビコン
│   └── robots.txt          # SEO用
├── src/
│   ├── components/
│   │   └── Navigation.astro # ナビゲーション
│   ├── layouts/
│   │   └── Layout.astro     # 共通レイアウト
│   ├── library/
│   │   └── microcms.ts     # microCMS API クライアント
│   ├── pages/
│   │   ├── about/           # このサイトについて
│   │   ├── blog/            # ブログ関連
│   │   │   ├── index.astro  # ブログ一覧
│   │   │   └── [blogid].astro # ブログ詳細
│   │   ├── contact/         # お問い合わせ
│   │   ├── privacy/         # プライバシーポリシー
│   │   └── index.astro      # トップページ
│   ├── styles/
│   │   └── global.scss      # グローバルスタイル
│   └── assets/              # Astroアセット
├── scripts/
│   └── generate-sitemap.js  # サイトマップ生成
├── astro.config.mjs         # Astro設定
├── package.json             # 依存関係
├── .env                     # 環境変数（ローカル）
├── env.example              # 環境変数テンプレート
├── .nvmrc                   # Node.js バージョン指定
├── mise.toml                # mise設定
└── _headers                  # Cloudflare Pages設定
```

## 🚀 セットアップ

### 1. リポジトリのクローン

```bash
git clone <repository-url>
cd astro-practice
```

### 2. 依存関係のインストール

```bash
npm install
```

### 3. 環境変数の設定

`.env`ファイルを作成し、以下の環境変数を設定：

```bash
cp env.example .env
```

`.env`ファイルに以下を設定：

```env
MICROCMS_SERVICE_DOMAIN=your-service-domain
MICROCMS_API_KEY=your-api-key
SSGFORM_FORM_ID=your-form-id
PUBLIC_SITE_URL=https://your-site.pages.dev
```

### 4. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで `http://localhost:4321` にアクセス

## 📝 利用可能なコマンド

| コマンド | 説明 |
|---------|------|
| `npm run dev` | 開発サーバーを起動（`localhost:4321`） |
| `npm run build` | 本番用ビルド（`./dist/`に出力） |
| `npm run preview` | ビルド結果をローカルでプレビュー |
| `npm run format` | Prettierでコードフォーマット |
| `npm run format:check` | フォーマットチェック |

## 🌐 デプロイ

### Cloudflare Pages

1. Cloudflare Pagesにプロジェクトを接続
2. 環境変数を設定：
   - `MICROCMS_SERVICE_DOMAIN`
   - `MICROCMS_API_KEY`
   - `SSGFORM_FORM_ID`
3. ビルドコマンド: `npm run build`
4. 出力ディレクトリ: `dist`

詳細は `DEPLOY.md` を参照してください。

## 📄 ページ構成

- **トップページ** (`/`): サイトの概要と機能紹介
- **ブログ一覧** (`/blog`): microCMSから取得したブログ記事の一覧
- **ブログ詳細** (`/blog/[id]`): 個別のブログ記事
- **このサイトについて** (`/about`): サイトの詳細情報
- **お問い合わせ** (`/contact`): SSGFormによるお問い合わせフォーム
- **プライバシーポリシー** (`/privacy`): プライバシーポリシー

## 🔧 技術的特徴

- **AstroのSSG**: 高速な静的サイト生成
- **microCMS連携**: ヘッドレスCMSによるコンテンツ管理
- **SSGForm**: 安全なフォーム処理（環境変数による設定）
- **レスポンシブデザイン**: モバイルファーストのUI
- **SEO最適化**: メタタグ、構造化データ、サイトマップ
- **セキュリティ**: Cloudflare Pagesのセキュリティヘッダー

## 📚 関連ドキュメント

- `DEPLOY.md`: デプロイ手順
- `SSGFORM_SETUP.md`: SSGForm設定ガイド
- `REDIRECT_GUIDE.md`: リダイレクト設定ガイド

## 🤝 貢献

プルリクエストやイシューの報告を歓迎します。

## 📄 ライセンス

このプロジェクトはMITライセンスの下で公開されています。