const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRoute = require("./src/routes/user.route.js");
const everyDayJob = require("./src/services/job.js");

const app = express();

dotenv.config();
const port = process.env.PORT || 3000;
const MONGODB_URL = process.env.MONGODB_URL;

app.use(express.static('public'));
app.use(express.json());
app.get("/", (req, res) => res.json("Welcome to birthday reminder App!"));
app.use("/users", userRoute);

//catch all route
// app.all("*", (req, res) => {
//     res.status(404).json({ error: "Page not found" });
//   });

mongoose
  .connect(MONGODB_URL)
  .then(() => {
    console.log("Connected to DB");
    // Run the job everyday
    everyDayJob();
    app.listen(port, () =>
      console.log(`Server is listening on http://localhost:${port}`)
    );
  })
  .catch((error) => {
    console.error("Error connecting to DB:", error.message);
    process.exit(1);
  });
