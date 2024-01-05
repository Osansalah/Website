import cookieParser from "cookie-parser";
export function uses(app, express) {
  app.use(
    express.urlencoded({
      extended: true,
    })
  );
  app.use(cookieParser());
}
