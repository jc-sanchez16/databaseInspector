"use strict";

const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;

const url = "mongodb://localhost:27017/";
const client = new MongoClient(url, { useUnifiedTopology: true });


const getDatabases = () => {
  client.connect()
    .then(client => {
      console.log("mongo connected");
      client.db().admin()
        .listDatabases().then(dbs => {
          console.log("Tengo lista");
          console.log(dbs);
          client.close();
        });
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};

const getColections = () => {
  client.connect()
    .then(client => {
      console.log("mongo connected");
      client.db().listCollections().toArray(function (err, collInfos) {
        console.log("Tengo lista");
        console.log(collInfos);
        client.close();
      });
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};


exports.getDatabases = getDatabases;