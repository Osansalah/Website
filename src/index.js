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

app.listen(process.env.Port, () => {
  console.log(
    `Server is running on port: http://${process.env.webdomain}:${process.env.Port}/ \n http://127.0.0.1:${process.env.Port}`
  );
});
