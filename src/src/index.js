const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db");

const showRoutes = require("./routes/show.routes");
const bookingRoutes = require("./routes/booking.routes");

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/shows", showRoutes);
app.use("/bookings", bookingRoutes);

sequelize.sync().then(() => console.log("DB synced"));

app.listen(process.env.PORT, () => {
  console.log("Server running on port", process.env.PORT);
});
