const mongoose = require("mongoose");
require('dotenv').config();
const mongoURI = process.env.MONGO_URI;



const connect = () => {
  return mongoose.connect(
    mongoURI
  );
};

module.exports=connect