const Event = require("../models/EventModel")

const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find({})
    res.status(200).json(events)
  } catch (error) {
    console.error(error)
  }
}

const createEvent = async (req, res) => {
  try {
    const event = await Event.create(req.body)
    res.status(201).json({ message: "Event created", id: event._id })
  } catch (error) {
    console.log(error)
  }
}
module.exports = { getAllEvents, createEvent }
