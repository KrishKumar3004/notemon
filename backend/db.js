const mongoose = require("mongoose");

const connectToMongo = () => {
  mongoose
    .connect(process.env.DB_URL || "mongodb://127.0.0.1:27017/inotebook")
    .then(() => {
      console.log("Mongo Connection Open");
    })
    .catch((err) => {
      console.log("Mongo Error");
    });
};

module.exports = connectToMongo;
