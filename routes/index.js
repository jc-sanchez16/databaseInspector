var express = require("express");
var router = express.Router();

const DB = require("./dbManager");
/* GET home page. */
router.get("/", function(req, res) {
  DB.getDatabases().then(dbs => {
    res.render("index", { title: "Express", databases: dbs.databases });
  });

});
router.get("/collections", function (req, res) {
  DB.getColections(req.query.dbName).then(data=>{
    res.json(data);
  });
});
router.get("/documents", function (req, res) {
  DB.getDocuments(req.query.dbName,req.query.collectionName).then(data => {
    res.json(data);
  });

});
router.get("/add", function (req, res) {
  console.log(req);

});
module.exports = router; 
