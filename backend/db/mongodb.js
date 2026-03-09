const mongoose = require("mongoose");

const mongoDB = async () => {
  try{
     await mongoose.connect();
     console.log("connected to mongodb")
  }
  catch{
     console.log("not connected to mongodb")
  }

}

module.exports = mongoDB;