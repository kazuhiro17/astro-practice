# Cloudflare Pages デプロイガイド

## 前提条件

1. Cloudflareアカウント（無料）
2. GitHub/GitLab/Bitbucketアカウント
3. プロジェクトをGitリポジトリにプッシュ済み

## デプロイ手順

### 1. Cloudflare Pagesでの設定

1. [Cloudflare Pages](https://pages.cloudflare.com/)にログイン
2. "Create a project" をクリック
3. リポジトリを選択して接続
4. 以下の設定を入力：

#### ビルド設定
- **Framework preset**: Astro
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Root directory**: `/` (プロジェクトルート)

#### 環境変数
以下の環境変数を設定：
- `MICROCMS_SERVICE_DOMAIN`: microCMSのサービスドメイン
- `MICROCMS_API_KEY`: microCMSのAPIキー

### 2. デプロイ後の設定

1. デプロイ完了後、実際のURLを取得
2. `astro.config.mjs`の`site`を実際のURLに更新
3. 再デプロイを実行

### 3. カスタムドメイン（オプション）

1. Cloudflare Pagesのダッシュボードで「Custom domains」を選択
2. ドメインを追加
3. DNS設定を更新

## トラブルシューティング

### ビルドエラー
- 環境変数が正しく設定されているか確認
- Node.jsのバージョンが18以上であることを確認

### ページが表示されない
- ビルド出力ディレクトリが`dist`であることを確認
- 静的サイト生成が正しく動作しているか確認

## 参考リンク

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Astro Deployment Guide](https://docs.astro.build/en/guides/deploy/)
