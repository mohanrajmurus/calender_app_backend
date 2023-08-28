const mongoose = require("mongoose")
const { Schema } = require("mongoose")

const eventSchema = new Schema({
  title: { type: String, require: [true, "Title is Required"] },
  date: { type: String, require: [true, "Date is Required"] },
  partcipants: { type: Array, require: [true, "Partcipants is Required"] },
  createdAt: { type: Date, default: new Date() },
})

const Event = mongoose.model("Event", eventSchema)

module.exports = Event
