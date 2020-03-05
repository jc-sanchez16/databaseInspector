var express = require("express");
var router = express.Router();

const getDb = require("../dbManager").getDatabases;
/* GET home page. */
router.get("/", function(req, res) {
  console.log(getDb);
  getDb();
  res.render("index", { title: "Express" });

});

module.exports = router;
