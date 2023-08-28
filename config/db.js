const mongoose = require("mongoose")

const connectDB = (URI) => {
  mongoose
    .connect(URI)
    .then(() => console.log("mongodb connected sucessfully"))
    .catch((err) => console.log(err))
}

module.exports = connectDB
