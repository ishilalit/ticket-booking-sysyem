const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Show = require("./show.model");

const Booking = sequelize.define("Booking", {
  seats: { type: DataTypes.INTEGER, allowNull: false },
  status: {
    type: DataTypes.ENUM("PENDING", "CONFIRMED", "FAILED"),
    defaultValue: "PENDING",
  }
});

Booking.belongsTo(Show);

module.exports = Booking;
