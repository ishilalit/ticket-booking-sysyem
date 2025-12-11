const express = require("express");
const router = express.Router();
const { createShow, getShows } = require("../controllers/show.controller");

router.post("/create", createShow);
router.get("/", getShows);

module.exports = router;
