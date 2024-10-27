const task = require("./routes/task.js");
module.exports = (app) => {
  app.use(task);
};
