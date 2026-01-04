# CSSが反映されない場合のトラブルシューティング

## 確認事項

### 1. 開発サーバーが起動しているか確認

```bash
npm run dev
```

ブラウザで `http://localhost:8000` にアクセスしてください。

### 2. ブラウザのキャッシュをクリア

- **Chrome/Edge**: `Ctrl+Shift+R` (Windows) または `Cmd+Shift+R` (Mac)
- **Firefox**: `Ctrl+F5` (Windows) または `Cmd+Shift+R` (Mac)
- または開発者ツールで「キャッシュの無効化」を有効にする

### 3. ブラウザのコンソールを確認

開発者ツール（F12）を開いて、エラーがないか確認してください。

### 4. ネットワークタブを確認

開発者ツールの「Network」タブで、CSSファイルが正しく読み込まれているか確認してください。

## 解決方法

### 方法1: 開発サーバーを再起動

```bash
# サーバーを停止（Ctrl+C）
# 再度起動
npm run dev
```

### 方法2: ビルドして確認

```bash
npm run build
npm run preview
```

### 方法3: ブラウザをハードリロード

- `Ctrl+Shift+Delete` でキャッシュをクリア
- またはシークレットモードで開く

## 確認すべきファイル

1. `index.html` - `<script type="module" src="/src/main.js"></script>` が含まれているか
2. `src/main.js` - SCSSが正しくインポートされているか
3. `src/scss/main.scss` - すべてのSCSSファイルが`@use`で読み込まれているか

## よくある問題

### 問題: 開発サーバーでCSSが反映されない

**解決策**: 
- ブラウザをハードリロード（`Ctrl+Shift+R`）
- 開発サーバーを再起動

### 問題: ビルド後のCSSが反映されない

**解決策**:
- `dist/`ディレクトリを削除して再ビルド
```bash
rm -rf dist
npm run build
```

### 問題: パスエラー

**解決策**:
- `vite.config.js`の`base`設定を確認
- 現在は`base: './'`（相対パス）に設定済み

