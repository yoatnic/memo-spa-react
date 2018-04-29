const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
    publicPath: "/"
  },
  devServer: {
    contentBase: "public/",
    historyApiFallback: true,
    port: 8080,
    before(app) {
      app.get("/items", (req, res) => {
        const url = require("url");
        const urlParts = url.parse(req.url, true);
        const query = urlParts.query;
        const items = [];
        for (let i = 1; i <= 20; i++) {
          const itemId = parseInt(query.startAt) + i;
          items.push({
            itemId,
            text: `items${itemId}`
          });
        }
        res.json(items);
      });
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"]
      }
    ]
  }
};
