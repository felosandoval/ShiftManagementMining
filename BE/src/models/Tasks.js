const { DataTypes } = require("sequelize");
const sequelize = require("../db/db.js");

const Tasks = sequelize.define(
  "tasks",
  {
    identificador: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tipotarea: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    estadourgencia: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    observaciones: {
      type: DataTypes.TEXT,
    },
    dia: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    hora: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    fechamantencionfutura: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Tasks;