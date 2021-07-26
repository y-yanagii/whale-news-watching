# whale-news-watching

## tiktok APIとGoogle News RSSを活用した鯨に特化したニュース集約アプリ

- 毎日ニュースをlineに送信
- tiktokAPIで取得してきたデータを一覧表示(新着順と閲覧順とか並べ替え可能)
- ニュースは無限スクロールでなんとなく
- いいね機能もあって良い
- ホエールウォッチング情報も載せても良いかも
- 鯨のグルメ情報もあり？

## デザイン

- 深海っぽい色合い
- netflixのようなUIで表示(Tiktokのデータ)
- 一覧表示がメインのため、同じデザインでデータが違うコンポーネントがたくさんできる。よってReactを導入
- 地図からデイリーのnewsを見れたら分布もわかって面白いかも

## 主な機能

- ログイン（いらないかも）
- 動画一覧（TikTokAPIより取得）
- ニュース一覧（RSSより取得）
- ニュース一覧は国内、世界でタブ分け。動画一覧は登録日時と閲覧回数で並び替え
- 位置情報＆グルメ一覧（飲食店検索系のAPI）
- いいね機能（ユーザ情報が必要になる）
- ホエールウォッチング一覧
- LINE通知機能（ニュースを何件か）
- 最新取得を定期実行し普段はDBのテーブルを見にいく感じ？(guiterflix参考)

## 技術選定

- SSR
  - 参考URL：https://qiita.com/amakawa_/items/e7d0720e1ab8632769bf
  - SSR:SPAではブラウザで行われていたJSの実行とHTML生成をサーバー側で行う技術
    - Node.jsを実行できるサーバーが必要(Expressで構築)
    - サーバー側でJavaScriptをHTMLをして返すことをSSR（Server Side Rendering）と呼びます。やっていることはほとんどPHPなどのサーバーサイド言語と同じ
  - 今回はページが決まっていて多くはないためプリレンダリング(事前読み込み)でも良い（※ビルド時にindex.htmlのような1つのHTMLファイルを生成するのではなく、ページごとにHTMLファイルを生成する技術）
- React
  - 今回は一覧表示がメインのため、見た目が同じで中身が違うコンポーネントがいくつもできる。そのためReactを使用することで以下のメリットがある。(Reactの書き方がパーツ単位のため)
    - 再利用性が高い
    - 保守性が高い
- TypeScript
  - 入力補完(VSCodeのため)
  - クラスを作ることができ、オブジェクト指向開発で開発できる
- Node.js(Express)
  - サーバサイドも一貫してNode.jsで作成
- Mysql
  - Expressとのサンプルが多い
- WebApi, RSS
  - Tiktok API
  - Google News Rss(API)
  - 飲食店検索系のAPI


### 以下、package.jsonのscripts
- client：	webpack-dev-serverの立ち上げ
- server：	expressの立ち上げ
- dev：	開発モード。expressサーバーとwebpack-dev-serverが立ち上がる
- build：	frontコードのコンパイル
- start：	本番モード。frontコードをコンパイルし、expressを立ち上げる
```
"client": "webpack serve --config ./config/webpack.config.js --open --mode development",
"server": "nodemon --exec babel-node src/server/server.js",
"dev": "NODE_ENV=development concurrently \"npm run client\" \"npm run server\"",
"build": "webpack --config ./config/webpack.config.js --mode development",
"start": "NODE_ENV=production yarn run build && yarn run server"
```
