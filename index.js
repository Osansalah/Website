const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.get("/login", (req, res) => {
  res.sendFile(__dirname.replace("Backend", "Frontend") + "/index.html");
});
app.get("/back", (req, res) => {
  res.sendFile(__dirname.replace("Backend", "Frontend") + "/back.html");
});

app.listen(3000, () => {
  console.log(`Server is running on port: http://localhost:3000/home`);
});
