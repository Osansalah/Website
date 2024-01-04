const express = require("express");
const cookieParser = require("cookie-parser");
const setupLoginRoute = require("./routes/Login.js");
const setupAddRoute = require("./routes/add.js");
const db = require("./database/mysql.js");
const { config } = require("dotenv");
const { cookieJwtAuth } = require("./middleware/cookieJwtAuth");

const app = express();
config();
db(process.env);
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());
app.get("/", cookieJwtAuth, (req, res) => {
  res.sendFile(__dirname + "/Frontend/html/Main.html");
});
app.get("/registration", (req, res) => {
  res.sendFile(__dirname + "/Frontend/html/registration.html");
});

setupLoginRoute(app);
setupAddRoute(app);

app.listen(process.env.Port, () => {
  console.log(
    `Server is running on port: http://de1.bot-hosting.net:${process.env.Port}/ \n http://127.0.0.1:${process.env.Port}`
  );
});
