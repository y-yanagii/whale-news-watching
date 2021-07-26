const path = require('path');

module.exports = {
  resolve: {
    // 対象にする拡張子の指定
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  entry: {
    // エントリポイントの指定
    client: ['./src/client.tsx'],
  },
  output: {
    // アウトプット先のディレクトリ指定(dist)
    path: path.resolve(__dirname, 'dist'),
    // アウトプットするファイルの名前を指定(名前は変更しない)
    filename: '[name].js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,
    host: `localhost`,
  },
  module: {
    rules: [
      {
        // 拡張子が.tsか.tsxだった場合に適用
        test: /\.ts(x?)$/,
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
                '@babel/preset-typescript',
              ],
            },
          },
        ],
      },
    ],
  },
  plugins: [],
};
