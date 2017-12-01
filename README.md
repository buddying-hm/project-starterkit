This is released under the MIT License, see LICENSE.

# はじめに

## 依存ファイルをローカルにインストール
package.jsonの内容に基づき依存ファイルをローカルにインストールする。  
`npm install` or `yarn`

## コンパイルファイルの出力先を設定
```json:package.json
// package.json

"output": {
    "development": {
        "context": "../public",
        "css": "assets/css",
        "js": "assets/js",
        "img": "assets/img",
        "font": "assets/font"
    },
    "production": {
        "context": "../source/html",
        "css": "/",
        "js": "assets/js",
        "img": "assets/img",
        "font": "assets/font"
    }
}
```
css,js,img,fontはcontextからのパス<br>
contextが未設定の場合はpackage.jsonと同じディレクトリがcontextになる。

# フロントエンド Commands
**実行方法は`npm run <command>` or `yarn <command>`**<br>

## コマンド

```json:package.json
// package.json

"scripts": {
    "start": "npm run watch",
    "build": "node tasks/build.js",
    "watch": "node tasks/watch.js",
    "watch:p": "node tasks/watch.js -p",
    "compile": "node tasks/compile.js",
    "compile:p": "node tasks/compile.js -p",
    "cleaning": "node tasks/clean.js",
    "cleaning:p": "node tasks/clean.js -p",
    "test": "jest --config config/jest.config.js",
    "lint": "$(npm bin)/eslint assets/js/*",
    ...
}
```

### `watch, watch:p`
開発サーバー起動  
ファイル変更監視

### `compile, compile:p`
単発コンパイル(css,jsファイル未圧縮 ソースマップあり)

### `build`
本番用コンパイル(css,jsファイル圧縮 ソースマップなし)

## SCSSコンパイル
`process.env.NODE_ENV`が`'development'`か`'production'`かによって  
* assets/scss/_base/_00.dev.scss
* assets/scss/_base/_00.pro.scss

のどちらかをimportします

## スタック
* npm | yarn
* webpack

### html
* ejs
* gulp

### css
* scss

### js
* babel
* jest
* flow
* eslint
