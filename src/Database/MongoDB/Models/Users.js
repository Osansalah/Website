import { model, Schema } from "mongoose";
export default function Users(args) {
  User;
}
export const User = model(
  "Users",
  new Schema({
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  })
);
