import { User } from "../Database/MongoDB/Models/Users.js";
import { cookieJwtAuth } from "../middleware/cookieJwtAuth.js";
import jwt from "jsonwebtoken";

export function posts(app) {
  add(app);
  login(app);
  Signup(app);
}
export function add(app) {
  app.post("/add", cookieJwtAuth, (req, res) => {
    /// console.log("Add: " + req.user);
    res.redirect("/");
  });
}

export function login(app) {
  app.post("/login", async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne(
      { username: username },
      "username password"
    ).exec();
    if (!user || user.password !== password) {
      console.log("not found");
      return res.redirect("/");
    }

    const token = jwt.sign(
      { username: username, password: password },
      process.env.Secret_Token,
      {
        expiresIn: "1h",
      }
    );

    res.cookie("token", token);
    return res.redirect("/");
  });
}
export function Signup(app) {
  app.post("/signup", async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne(
      { username: username },
      "username password"
    ).exec();
    if (user) {
      console.log("there is one");
      return res.redirect("/registration#regist");
    }
    new User({
      username: username,
      password: password,
    })
      .save()
      .catch(console.error);
    return res.redirect("/registration");
  });
}
