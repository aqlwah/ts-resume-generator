# これ何？

- json ファイルの内容を[ejs](https://ejs.co/)テンプレートにバインドして html ファイルを吐いてくれるツールです。
- [ts-node](https://github.com/TypeStrong/ts-node)の壁打ち用に作りました。
- PDF ファイルで出力したくなったら chrome とかの[PDF で保存]機能を使ってください。気が向いたら機能追加するかも。

# 使い方

## 1. 記載する内容を`resume.json`に書いて`personal-info/`に入れる。

※あらかじめサンプルの`resume.json`を置いてます。

## 2. プロフィール画像を`photo.png`という名前にして`src/assets`に入れる。

※あらかじめサンプルの`photo.png`を置いてます。

## 3. 実行する。

```sh
$ npm install
$ npm run start
```

## おまけ. 自作テンプレートの使い方

好きに書いて`src/template/resume.ejs.html`に置く。
