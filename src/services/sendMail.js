const nodemailer = require("nodemailer");
require("dotenv").config(); // Correct way to load environment variables

const sendBirthdayEmail = async (user) => {
  // Create a transporter using OAuth2 authentication
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.USERNAME, // Your Gmail address
      clientId: process.env.OAUTH_CLIENTID, // OAuth2 client ID
      clientSecret: process.env.OAUTH_CLIENT_SECRET, // OAuth2 client secret
      refreshToken: process.env.OAUTH_REFRESH_TOKEN, // OAuth2 refresh token
    },
  });

  // Set up the email options
  let mailOptions = {
    from: process.env.USERNAME, // It can be dynamic (use the same as the `user` for Gmail)
    to: user.email, // The recipient's email
    subject: "Happy Birthday!",
    text: `Happy Birthday, ${user.username}!`,
  };

  // Try sending the email
  try {
    await transporter.sendMail(mailOptions);
    console.log(`Birthday email sent to ${user.username}`);
  } catch (error) {
    console.error(`Error sending email to ${user.username}:`, error);
  }
};

module.exports = sendBirthdayEmail;
