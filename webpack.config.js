const path = require("path");
const webpack = require("webpack");

module.exports = {
  context: __dirname,
  entry: "./src/Index.jsx",
  devtool: "cheap-eval-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public"),
  },
  output: {
    path: path.join(__dirname, "public"),
    publicPath: "/public/",
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true,
  },
  module: {
    rules: [{ test: /\.jsx?$/, loader: "babel-loader" }, { test: /\.css$/, loader: "style-loader!css-loader" }],
  },
};
