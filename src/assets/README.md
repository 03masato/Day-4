# アセットディレクトリ

このディレクトリには画像とフォントファイルを配置します。

## ディレクトリ構成

```
src/assets/
├── images/
│   ├── common/      # 共通画像（ロゴ、アイコンなど）
│   ├── hero/        # ヒーローセクション用画像
│   └── feature/     # 特徴セクション用画像
└── fonts/           # フォントファイル
```

## 使用方法

### 画像の使用例

#### JavaScriptからインポート
```javascript
import logoUrl from '@/assets/images/common/logo.svg';
import heroBg from '@/assets/images/hero/hero-bg.jpg';
```

#### SCSSから使用
```scss
.hero {
  background-image: url('@/assets/images/hero/hero-bg.jpg');
}
```

### フォントの使用例

#### SCSSで定義
```scss
@font-face {
  font-family: 'Custom Font';
  src: url('@/assets/fonts/custom-font.woff2') format('woff2');
  font-weight: 400;
  font-display: swap;
}
```

## パスエイリアス

`@`は`/src`を指します（vite.config.jsで設定済み）

- `@/assets/images/logo.svg` = `/src/assets/images/logo.svg`
- `@/scss/main.scss` = `/src/scss/main.scss`

