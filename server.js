const express = require("express");
const app = express();
var cors = require("cors");
const marbleApi = require("./server/routes/marbleApi");
const managerApi = require("./server/routes/managerApi");
const orderApi = require("./server/routes/orderApi");
const customerApi = require("./server/routes/customerApi");
const path = require("path");
const port = 3001;
const mongoose = require("mongoose");
const marbleDB = "mongodb://127.0.0.1:27017/marbleDB";
const atlas_database =
  "mongodb+srv://salemgode:vlCKJ94Xqwra4p9n@cluster0.vv6m4tp.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(atlas_database ? atlas_database : marbleDB, {
    useNewUrlParser: true,
  })
  .then(() => console.log("conneted to DB"))
  .catch((err) => console.log(err));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );
  next();
});
app.use(cors());
app.use(express.static(path.join(__dirname, "node_modules")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", marbleApi);
app.use("/", managerApi);
app.use("/", customerApi);
app.use("/", orderApi);

app.listen(port, function () {
  console.log(`Running on port ${port}`);
});
