"use strict";

const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;

function Database() {
  const db = {};

  db.connect = () => {
    const client = new MongoClient(url, { useUnifiedTopology: true });
    return client.connect();
  };

  db.getDatabases = () =>
    db.connect().then(client => {
      return client.db().admin()
        .listDatabases()
        .finally(() => client.close());
    });

  db.getColections = (dbName) =>
    db.connect().then(client => {
      return client.db(dbName)
        .listCollections()
        .toArray()
        .finally(() => client.close());
    });

  db.getDocuments = (dbName, colectionName) =>
    db.connect().then(client => {
      return client.db(dbName)
        .collection(colectionName)
        .find()
        .limit(20)
        .sort({_id:-1})
        .toArray()
        .finally(() => client.close());
    });

  return db;
}


module.exports = Database();