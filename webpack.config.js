const path = require('path');

module.exports = {
  resolve: {
    // 対象にする拡張子の指定
    extensions: ['.js', '.jsx'],
  },
  entry: {
    // エントリポイントの指定
    client: './src/client.jsx',
  },
  output: {
    // アウトプット先のディレクトリ指定(assets)
    path: path.resolve(__dirname, 'assets'),
    // アウトプットするファイルの名前を指定(名前は変更しない)
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        // 拡張子が.jsか.jsxだった場合に適用
        test: /\.jsx?$/,
        // node_modulesディレクトリは除外
        exclude: /node_modules/,
        use: [
          {
            // babelの設定
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    useBuiltIns: 'usage',
                    corejs: 3,
                  },
                ],
                [
                  '@babel/preset-react',
                  {
                    useBuiltIns: 'usage',
                    corejs: 3,
                  },
                ],
              ],
            },
          },
        ],
      },
    ],
  },
};
