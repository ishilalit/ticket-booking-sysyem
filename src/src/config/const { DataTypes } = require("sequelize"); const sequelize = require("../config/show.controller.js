const Show = require("../models/show.model");

exports.createShow = async (req, res) => {
  try {
    const { name, startTime, totalSeats } = req.body;
    const show = await Show.create({ name, startTime, totalSeats });
    res.json(show);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getShows = async (req, res) => {
  const shows = await Show.findAll();
  res.json(shows);
};
