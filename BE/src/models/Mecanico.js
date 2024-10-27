const { DataTypes } = require("sequelize");
const sequelize = require("../db/db.js");

const Mecanico = sequelize.define(
  "Mecanico",
  {
    rut: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    disponibilidad: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    turno: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Mecanico;