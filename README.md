## 概要

このリポジトリは、VSCode 拡張 **`nextjs-unused-media-checker`**（Open VSX: `https://open-vsx.org/extension/Takanaz/nextjs-unused-media-checker`）のユースケース/検証用に、
**Next.js（App Router）で “public 配下のメディア参照パターン” をまとめたサンプル**です。

- 参考: 拡張機能のリポジトリは [Takanaz/nextjs-unused-media-checker](https://github.com/Takanaz/nextjs-unused-media-checker) です（仕様/実装/README はこちら）。

- **検証ページ**: `http://localhost:3000/unused-media-checker`
- **目的**: “使っている（used）” と “使っていない（unused）” を、拡張機能で分かりやすく検知できるようにする
- **対象の拡張子**: `gif` / `jpg` / `jpeg` / `mp4` / `png` / `svg` / `webp`

### 置き方（used / unused の分け方）

- **used（参照される）**: `public/<ext>/` に配置（例: `public/png/used-image.png`）
- **unused（参照されない）**: `public/<ext>/unused/` に配置（例: `public/png/unused/unused-image.png`）

検証ページでは、以下のような参照パターンを使っています（素材は未配置でも OK で、404 でも問題ありません）。

- `next/image`
- `<img src="...">`
- `<picture><source srcSet="...">`
- CSS Modules の `url(...)` / `mask-image: url(...)`
- グローバル CSS の `url(...)`（`@import` 連鎖含む）
- `<video src="...">`
