const express = require("express");
const router = express.Router();
const { bookSeats } = require("../controllers/booking.controller");

router.post("/book", bookSeats);

module.exports = router;
