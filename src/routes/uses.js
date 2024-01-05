import cookieParser from "cookie-parser";
import path from "path";

export function uses(app, express) {
  app.use(
    express.urlencoded({
      extended: true,
    })
  );
  app.use(cookieParser());
  app.use(express.static(path.resolve(path.dirname("")) + "/src/Frontend"));
}
