# 画像・フォントの置き場所とパス設定ガイド

## ディレクトリ構成

```
src/
├── assets/
│   ├── images/          # 画像ファイル
│   │   ├── common/      # 共通画像（ロゴなど）
│   │   ├── hero/        # ヒーローセクション用
│   │   └── feature/     # 特徴セクション用
│   └── fonts/           # フォントファイル
│       ├── *.woff2      # 推奨フォーマット
│       ├── *.woff
│       └── *.ttf
└── scss/
```

## 画像の配置と使用方法

### 1. 画像の配置場所

**推奨構成:**
```
src/assets/images/
├── common/
│   └── logo.svg
├── hero/
│   └── hero-bg.jpg
└── feature/
    └── feature-icon.png
```

### 2. HTMLでの使用方法

#### 方法1: 直接インポート（推奨）
```html
<script type="module">
  import logoUrl from '/src/assets/images/common/logo.svg';
</script>
<img src={logoUrl} alt="Logo">
```

#### 方法2: publicディレクトリ（静的ファイル）
```
public/
└── images/
    └── logo.svg
```
```html
<img src="/images/logo.svg" alt="Logo">
```

### 3. SCSSでの使用方法

```scss
.p-hero {
  background-image: url('/src/assets/images/hero/hero-bg.jpg');
  // または
  background-image: url('@/assets/images/hero/hero-bg.jpg');
}
```

## フォントの配置と使用方法

### 1. フォントの配置場所

**推奨構成:**
```
src/assets/fonts/
├── NotoSansJP-Regular.woff2
├── NotoSansJP-Bold.woff2
└── NotoSansJP-Regular.woff
```

### 2. SCSSでの使用方法

```scss
@font-face {
  font-family: 'Noto Sans JP';
  src: url('/src/assets/fonts/NotoSansJP-Regular.woff2') format('woff2'),
       url('/src/assets/fonts/NotoSansJP-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

body {
  font-family: 'Noto Sans JP', sans-serif;
}
```

## パスの扱い（ドメイン直下/サブディレクトリ）

### 現在の設定

`vite.config.js`で`base: './'`を設定しているため、**相対パス**でビルドされます。

### パス設定の違い

#### 1. ドメイン直下（`base: '/'`）

```javascript
// vite.config.js
export default defineConfig({
  base: '/',
});
```

**ビルド結果:**
```html
<script src="/assets/index.js"></script>
<link href="/assets/style.css">
```

**使用例:**
- `https://example.com/`
- `https://example.com/index.html`

#### 2. サブディレクトリ（`base: '/subdir/'`）

```javascript
// vite.config.js
export default defineConfig({
  base: '/subdir/',
});
```

**ビルド結果:**
```html
<script src="/subdir/assets/index.js"></script>
<link href="/subdir/assets/style.css">
```

**使用例:**
- `https://example.com/subdir/`
- `https://example.com/subdir/index.html`

#### 3. 相対パス（`base: './'`）✅ 現在の設定

```javascript
// vite.config.js
export default defineConfig({
  base: './',
});
```

**ビルド結果:**
```html
<script src="./assets/index.js"></script>
<link href="./assets/style.css">
```

**使用例:**
- 任意のディレクトリに配置可能
- `https://example.com/` でも動作
- `https://example.com/subdir/` でも動作
- ローカルファイル（`file://`）でも動作

### パス設定の切り替え方法

#### 開発環境用の設定

```javascript
// vite.config.js
export default defineConfig({
  base: process.env.NODE_ENV === 'production' 
    ? './'           // 本番: 相対パス
    : '/',           // 開発: 絶対パス
});
```

#### 環境変数での切り替え

```javascript
// vite.config.js
export default defineConfig({
  base: process.env.VITE_BASE_PATH || './',
});
```

```bash
# .env.production
VITE_BASE_PATH=/subdir/

# .env.development
VITE_BASE_PATH=/
```

## Viteでのアセット処理

### アセットのインポート方法

#### JavaScript/TypeScriptから

```javascript
// main.js
import logoUrl from './assets/images/logo.svg';
import heroBg from './assets/images/hero/hero-bg.jpg';

// 使用
document.querySelector('img').src = logoUrl;
```

#### HTMLから（publicディレクトリ）

```
public/
└── images/
    └── logo.svg
```

```html
<img src="/images/logo.svg" alt="Logo">
```

### ビルド時のアセット処理

- **`src/assets/`内のファイル**: ハッシュ付きファイル名で出力
  - `logo.svg` → `logo-a1b2c3d4.svg`
- **`public/`内のファイル**: そのままコピー（ハッシュなし）
  - `public/images/logo.svg` → `dist/images/logo.svg`

### 推奨事項

1. **画像**: 
   - 動的に変更しない画像 → `src/assets/images/`
   - 静的で変更頻度が低い画像 → `public/images/`

2. **フォント**: 
   - `src/assets/fonts/`に配置
   - SCSSで`@font-face`を定義

3. **パス設定**:
   - 柔軟性が必要 → `base: './'`（相対パス）
   - 固定パスが必要 → `base: '/subdir/'`（絶対パス）

## 実装例

### 画像の追加例

1. 画像を配置: `src/assets/images/common/logo.svg`
2. HTMLで使用:
```html
<script type="module">
  import logoUrl from '/src/assets/images/common/logo.svg';
  document.querySelector('.logo').src = logoUrl;
</script>
```

3. SCSSで使用:
```scss
.logo {
  background-image: url('/src/assets/images/common/logo.svg');
}
```

### フォントの追加例

1. フォントを配置: `src/assets/fonts/NotoSansJP-Regular.woff2`
2. SCSSで定義:
```scss
@font-face {
  font-family: 'Noto Sans JP';
  src: url('/src/assets/fonts/NotoSansJP-Regular.woff2') format('woff2');
  font-weight: 400;
  font-display: swap;
}
```

3. 使用:
```scss
body {
  font-family: 'Noto Sans JP', sans-serif;
}
```

