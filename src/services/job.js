const { Cron } = require("croner");
const checkBirthday = require("./checkBirthday.js");
const { getAllUsers } = require("./getUsers.js");

const everyDayJob = async () => {
  const date = new Date();
  const time = date.toLocaleTimeString();
  const users = await getAllUsers();

  new Cron("0 7 * * *", () => {
    console.log("🎉 Happy Birthday! Time:", time);
    checkBirthday(users);
  });
};

module.exports = everyDayJob;
