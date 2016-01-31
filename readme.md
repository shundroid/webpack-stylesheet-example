# Webpack StyleSheet Example

WebpackでStyleSheetを読む

## 準備

```
$ npm i -g webpack
$ npm i
$ webpack
```

`index.html`を開く。

## 仕組み

`files/main.js`内で、`files/style.css`を require している。
それを、`style-loader`、`css-loader`で読み、`bundle.js`にまとめる。