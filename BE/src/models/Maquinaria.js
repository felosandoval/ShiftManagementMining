const { DataTypes } = require("sequelize");
const sequelize = require("../db/db.js");

const Maquinaria = sequelize.define(
  "Maquinaria",
  {
    patente: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    modelo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tipoMotor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Maquinaria;