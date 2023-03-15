import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(`${process.env.DATABASE_URI}`);
    console.log("Connected to database");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
