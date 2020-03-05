var express = require("express");
var router = express.Router();

const getDb = require("../dbManager").getDatabases;
const getColections = require("../dbManager").getColections;
/* GET home page. */
router.get("/", function(req, res) {
  console.log(getDb);
  getDb();
  res.render("index", { title: "Express" });

});
router.get("/collections", function (req, res) {
  req.body;
  getColections();
  res.render("index", { title: "Express" });

});
module.exports = router;
