import express from "express";
import { posts } from "./routes/posts.js";
import { gets } from "./routes/gets.js";
import { uses } from "./routes/uses.js";
import { config } from "dotenv";
const app = express();
config();

uses(app, express);
posts(app);
gets(app);

app.get("/registration", (req, res) => {
  res.sendFile(
    path.resolve(path.dirname("")) + "/src/Frontend/Html/Registration.html"
  );
});
app.listen(process.env.Port, () => {
  console.log(
    `Server is running on port: http://de1.bot-hosting.net:${process.env.Port}/ \n http://127.0.0.1:${process.env.Port}`
  );
});
