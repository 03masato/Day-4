import { defineConfig } from 'vite';

export default defineConfig({
  // ベースパス設定（相対パス）
  base: './',
  // 開発サーバーの設定
  server: {
    port: 8000,
    open: true,
  },
  // ビルド設定
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    // CSSの出力設定
    cssCodeSplit: false,
  },
  // パスのエイリアス設定（オプション）
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});

