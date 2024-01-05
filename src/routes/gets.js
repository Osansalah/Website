import { cookieJwtAuth } from "../middleware/cookieJwtAuth.js";
import path from "path";

export function gets(app) {
  home(app);
  registration(app);
}
function home(app) {
  app.get("/", cookieJwtAuth, (req, res) => {
    res.sendFile(
      path.resolve(path.dirname("")) + "/src/Frontend/html/Main.html"
    );
  });
}

function registration(app) {
  app.get("/registration", (req, res) => {
    res.sendFile(
      path.resolve(path.dirname("")) + "/src/Frontend/html/registration.html"
    );
  });
}
