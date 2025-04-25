import nodemailer from "nodemailer";
import { configDotenv } from "dotenv";

configDotenv();

const sendBirthdayEmail = async (user) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.USERNAME,
      pass: process.env.PASSWORD,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    },
  });

  let mailOptions = {
    from: "mikkybeardless@gmail.com",
    to: user.email,
    subject: "Happy Birthday!",
    text: `Happy Birthday, ${user.username}!`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Birthday email sent to ${user.username}`);
  } catch (error) {
    console.error(`Error sending email to ${user.username}:`, error);
  }
};

export default sendBirthdayEmail;