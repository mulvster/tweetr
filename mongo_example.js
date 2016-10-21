"use strict";


const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = "mongodb://127.0.0.1:27017/test";
// module.exports = function(MONGODB_URI) {  //closures.
  function connectAndThen(){
    MongoClient.connect(MONGODB_URI, (err, db) => {
      // cb(err, db);
      let collection = db.collection("tweets");
      console.log("Hi");
      collection.find().toArray((err,results) =>{
        console.log('Results: ', results);
      })
    });
  // return {
  //   connectAndThen: connectAndThen
  // };
}
connectAndThen();

// const MongoClient = require("mongodb").MongoClient;
// const MONGODB_URI = "mongodb://127.0.0.1:27017/test";
//
// function mongoConnect () {
//   console.log(`Connecting to MongoDB running at: ${MONGODB_URI}`);
//
//   MongoClient.connect(MONGODB_URI, (err, db) => {
//     if (err) {
//       console.log('Could not connect! Unexpected error. Details below.');
//       throw err;
//     }
//     console.log('Connected to the database!');
//     let collection = db.collection("tweets");
//
//     console.log('Retrieving documents for the "tweets" collection....');
//     collection.find().toArray((err, results) => {
//       console.log('Results: ', results);
//       console.log('Disconnecting from Mongo!');
//       db.close();
//     });
//   });
// }
// mongoConnect();