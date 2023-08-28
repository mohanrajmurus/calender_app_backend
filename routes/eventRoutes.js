const express = require("express")
const { getAllEvents, createEvent } = require("../controllers/eventController")
const router = express.Router()
router.route("/events").get(getAllEvents).post(createEvent)
module.exports = router
