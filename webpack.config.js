const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'development', //開発時は'development'、本番時は'production'とする
  target: 'node', // Node.js向けにバンドルを設定
  entry: './src/server/index.js', // エントリーポイント
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js'
  },
  externals: [nodeExternals()], // Node.jsのビルトインモジュールをバンドルから除外
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/, // JavaScriptおよびTypeScriptファイルに適用
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript']
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'] // 解決する拡張子を指定
  }
};