const Sequelize = require("sequelize");

const sequelize = new Sequelize("gestion", "ayds", "1234567890", {
  host: "POSTGRES",
  dialect: "postgres",
});

module.exports = sequelize;
