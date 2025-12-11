const Booking = require("../models/booking.model");
const Show = require("../models/show.model");
const { acquireLock, releaseLock } = require("../utils/lock");

exports.bookSeats = async (req, res) => {
  const { showId, seats } = req.body;

  await acquireLock();

  try {
    const show = await Show.findByPk(showId);
    if (!show)
      return res.status(404).json({ error: "Show not found" });

    if (show.bookedSeats + seats > show.totalSeats) {
      releaseLock();
      return res.status(400).json({
        status: "FAILED",
        message: "Seats unavailable"
      });
    }

    const booking = await Booking.create({
      seats,
      ShowId: showId,
      status: "PENDING"
    });

    await show.update({
      bookedSeats: show.bookedSeats + seats
    });

    await booking.update({
      status: "CONFIRMED"
    });

    releaseLock();
    res.json(booking);
  } catch (err) {
    releaseLock();
    res.status(500).json({ error: err.message });
  }
};
