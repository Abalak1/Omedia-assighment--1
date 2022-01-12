import { express } from "express";
import { path } from "path";
import open from "open";

const port = 3000;
const app = express();
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../src/index.html"));
});
app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open("http://localhost:" + port);
  }
});

import webpack from "webpack";
import config from "../webpack.config";
const compiler = webpack(config);
app.use(
  require("webpack-dev-middleware")(compiler, {
    publicPath: config.output.publicPath,
}) );