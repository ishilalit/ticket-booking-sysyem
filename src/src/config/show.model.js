const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Show = sequelize.define("Show", {
  name: { type: DataTypes.STRING, allowNull: false },
  startTime: { type: DataTypes.DATE, allowNull: false },
  totalSeats: { type: DataTypes.INTEGER, allowNull: false },
  bookedSeats: { type: DataTypes.INTEGER, defaultValue: 0 }
});

module.exports = Show;
