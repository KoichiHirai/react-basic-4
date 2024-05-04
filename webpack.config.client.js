const path = require('path');

module.exports = {
  mode: 'development', //開発時は'development'、本番時は'production'とする
  entry: './src/index.tsx', // エントリーポイント
  output: {
    path: path.resolve(__dirname, 'client'),
    filename: 'client_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/, // JavaScriptおよびTypeScriptファイルに適用
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env',["@babel/preset-react", { "runtime": "automatic" }], '@babel/preset-typescript']
          }
        }
      },
      {
        test: /\.scss$/,  // .scssファイルに対する正規表現
        use: [
          'style-loader', // CSSをDOMに注入
          'css-loader',   // CSSをCommonJSに変換
          'sass-loader'   // SassをCSSにコンパイル
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'] // 解決する拡張子を指定
  }
};