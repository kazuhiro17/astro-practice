import { getBlogs } from "../src/library/microcms.js";

// サイトマップを生成する関数
export async function generateSitemap() {
  const baseUrl = "https://your-site.pages.dev"; // 実際のURLに変更

  try {
    // ブログ記事を取得
    const blogResponse = await getBlogs({ fields: ["id", "publishedAt"] });

    // 静的ページ
    const staticPages = ["", "/about", "/blog", "/contact", "/privacy"];

    // ブログ詳細ページ
    const blogPages = blogResponse.contents.map(
      content => `/blog/${content.id}`
    );

    // 全ページを結合
    const allPages = [...staticPages, ...blogPages];

    // XMLサイトマップを生成
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    page => `  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === "" ? "1.0" : page === "/blog" ? "0.9" : "0.8"}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

    return sitemap;
  } catch (error) {
    console.error("サイトマップ生成エラー:", error);
    return null;
  }
}
