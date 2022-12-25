const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

const connectDB = () => {
  try {
    mongoose.connect(process.env.MongoURI);

    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
