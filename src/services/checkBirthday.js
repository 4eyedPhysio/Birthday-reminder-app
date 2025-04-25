const sendBirthdayEmail = require("./sendMail.js");
const isTodayBirthday = require("./isBirthday.js");

const checkBirthday = (users) => {
  users.forEach((user) => {
    if (isTodayBirthday(user.dateOfBirth)) {
      sendBirthdayEmail(user);
    }
  });
};

module.exports = checkBirthday;
