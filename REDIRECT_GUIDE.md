# Cloudflare Pages リダイレクト設定ガイド

## ブログ詳細ページのURL変更対応

### 変更内容
- **旧URL**: `/[blogid]` (例: `/entry-1`)
- **新URL**: `/blog/[blogid]` (例: `/blog/entry-1`)

### Cloudflare Pagesでのリダイレクト設定

#### 1. Cloudflare Pagesダッシュボードでの設定

1. Cloudflare Pagesダッシュボードにログイン
2. プロジェクトを選択
3. 「Settings」→「Redirects」を選択
4. 以下のリダイレクトルールを追加：

```
Source: /:blogid
Destination: /blog/:blogid
Status: 301 (Permanent Redirect)
```

#### 2. 設定例

| Source | Destination | Status |
|--------|-------------|--------|
| `/:blogid` | `/blog/:blogid` | 301 |
| `/entry-1` | `/blog/entry-1` | 301 |
| `/entry-2` | `/blog/entry-2` | 301 |

#### 3. ワイルドカードパターン

動的パラメータを使用する場合：
- `:blogid` - 任意のブログIDにマッチ
- `*` - 任意の文字列にマッチ

### 設定後の確認

#### 1. リダイレクトのテスト
```bash
curl -I https://your-site.pages.dev/entry-1
# 期待される結果: 301 Moved Permanently
# Location: https://your-site.pages.dev/blog/entry-1
```

#### 2. SEOツールでの確認
- Google Search Console
- Bing Webmaster Tools
- その他のSEOツール

### 注意事項

#### 1. 301リダイレクトの効果
- SEOパワーの移行
- 検索エンジンでの新しいURLの認識
- ユーザーの自動リダイレクト

#### 2. 設定時間
- リダイレクト設定は即座に反映
- 検索エンジンの認識には数日〜数週間かかる場合がある

#### 3. モニタリング
- リダイレクトの動作確認
- 404エラーの監視
- 検索エンジンでの新しいURLの認識状況

### トラブルシューティング

#### リダイレクトが動作しない場合
1. Cloudflare Pagesの設定を確認
2. キャッシュのクリア
3. ブラウザのキャッシュクリア

#### 無限リダイレクトが発生する場合
1. リダイレクトルールの見直し
2. 循環参照の確認
3. 設定の削除と再設定
