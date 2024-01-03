const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/Frontend/html/index.html");
});
app.get("/back", (req, res) => {
  res.sendFile(__dirname + "/Frontend/html/back.html");
});

app.listen(22021, () => {
  console.log(
    `Server is running on port: http://de1.bot-hosting.net:22021/ \n http://127.0.0.1:22021`
  );
});
