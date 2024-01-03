const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/Frontend/index.html");
});
app.get("/back", (req, res) => {
  res.sendFile(__dirname + "/Frontend/back.html");
});

app.listen(22021, () => {
  console.log(`Server is running on port: http://de1.bot-hosting.net:22021/`);
});
