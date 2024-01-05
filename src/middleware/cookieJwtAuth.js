import jwt from "jsonwebtoken";

export function cookieJwtAuth(req, res, next) {
  const token = req.cookies.token;
  try {
    const user = jwt.verify(token, process.env.Secret_Token);
    req.user = user;
    next();
  } catch (err) {
    res.clearCookie("token");
    return res.redirect("/registration");
  }
}
