# Day-4 ランディングページ

## プロジェクト構成

```
Day-4/
├── index.html              # メインHTMLファイル（Viteのエントリーポイント）
├── vite.config.js          # Vite設定ファイル
├── src/
│   ├── main.js            # JavaScriptエントリーポイント（SCSSをインポート）
│   └── scss/              # SCSSソースファイル
│       ├── foundation/    # リセット、ベーススタイル
│       ├── layout/        # ヘッダー、フッター
│       ├── object/
│       │   ├── component/ # ボタン、タイトルなどのコンポーネント
│       │   ├── project/   # ヒーロー、特徴、CTAなどのプロジェクト
│       │   └── utility/   # ユーティリティクラス
│       └── main.scss      # メインSCSSファイル（全ファイルをインポート）
└── dist/                  # ビルド出力（自動生成）
    ├── index.html
    └── assets/            # CSS、JSファイル
```

## 使い方

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 開発サーバーの起動

```bash
npm run dev
```

Vite の開発サーバーが起動し、自動的にブラウザが開きます。

- ホットリロード: ファイルを変更すると自動的にリロードされます
- SCSS の変更も自動的に反映されます
- デフォルトポート: `http://localhost:8000`

### 3. 本番ビルド

```bash
npm run build
```

`dist/` ディレクトリに最適化されたファイルが生成されます。

### 4. ビルド結果のプレビュー

```bash
npm run preview
```

ビルドしたファイルをローカルでプレビューできます。

## 開発の流れ

1. `npm run dev` で開発サーバーを起動
2. `src/scss/` 内の SCSS ファイルを編集
3. 自動的にホットリロードされ、変更が即座に反映されます
4. ブラウザで確認（自動リロード）

## Vite の特徴

- ⚡ **高速な開発サーバー**: 即座に起動、高速な HMR（Hot Module Replacement）
- 🎯 **自動的な最適化**: 本番ビルド時に自動的に最適化
- 📦 **モジュールバンドリング**: ES モジュールをサポート
- 🎨 **SCSS 統合**: ネイティブで SCSS をサポート（追加設定不要）

## ファイル構成

### Foundation（基盤）

- `_reset.scss`: CSS リセット
- `_base.scss`: ベーススタイル、CSS 変数

### Layout（レイアウト）

- `_l-header.scss`: ヘッダー
- `_l-footer.scss`: フッター

### Component（コンポーネント）

- `_c-button.scss`: ボタンコンポーネント
- `_c-title.scss`: タイトルコンポーネント

### Project（プロジェクト）

- `_p-hero.scss`: ヒーローセクション
- `_p-feature.scss`: 特徴セクション
- `_p-cta.scss`: CTA セクション

### Utility（ユーティリティ）

- `_u-spacing.scss`: スペーシングユーティリティ

## 注意事項

- **開発中**: `npm run dev` を使用してください。SCSS の変更は自動的に反映されます
- **本番ビルド**: `npm run build` で最適化されたファイルを生成します
- **SCSS ファイル**: `src/scss/` 内のファイルを編集してください。`dist/` 内のファイルは自動生成されるため、直接編集しないでください
- **Vite の利点**: 開発サーバーは非常に高速で、ファイル変更が即座に反映されます
