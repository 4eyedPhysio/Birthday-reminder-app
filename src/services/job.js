import Cron from "croner";
import checkBirthday from "./checkBirthday.js";
import { getAllUsers } from "./getUsers.js";

const everyDayJob = async () => {
  const date = new Date();
  const time = date.toLocaleTimeString();
  const users = await getAllUsers();
  const job = Cron("0 07 * * 0-6", () => {
    // Runs every day at 7AM
    console.log("Happy Birthday, time:", time);
    checkBirthday(users);
  });
};
export default everyDayJob;