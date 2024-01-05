import { cookieJwtAuth } from "../middleware/cookieJwtAuth.js";
import jwt from "jsonwebtoken";
const getUser = async (username) => {
  return { password: "123456", username };
};
export function posts(app) {
  add(app);
  login(app);
  Signup(app);
}
export function add(app) {
  app.post("/add", cookieJwtAuth, (req, res) => {
    console.log(req.user);
    res.redirect("/");
  });
}

export function login(app) {
  app.post("/login", async (req, res) => {
    const { username, password } = req.body;

    const user = await getUser(username);

    if (!user || user.password !== password) {
      return res.status(403).json({
        error: "invalid login",
      });
    }

    const token = jwt.sign(user, process.env.Secret_Token, { expiresIn: "1h" });

    res.cookie("token", token);

    return res.redirect("/");
  });
}
export function Signup(app) {
  app.post("/signup", async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(403).json({
        error: "non have to be empty",
      });
    }
    AddUser(username, password);
    return res.redirect("/registration");
  });
}
