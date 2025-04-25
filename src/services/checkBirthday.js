import sendBirthdayEmail from "./sendMail.js";
import isTodayBirthday from "./isBirthday.js";

const checkBirthday = (users) => {
  users.forEach((user) => {
    if (isTodayBirthday(user.dateOfBirth)) {
      sendBirthdayEmail(user);
    }
  });
};
export default checkBirthday;