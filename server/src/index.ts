import express from "express";
import { connect } from "./db";
import * as dotenv from "dotenv";
import cors from "cors";
import { UserModel } from "./users/users.model";
import * as mongoose from "mongoose";

connect();
const app = express();
app.use(cors());
const PORT = 3010;
const router = express.Router();
app.use(express.json());

app.get("/", (req, res) => {
  res.json("Hello World");
});

// if username in db => check password, else return "not registered"
// if password doesnt match, return "please check the credentials"

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username });
  if (user) {
    res.status(500);
    res.json({
      message: "User already registered",
    });
  }
  res.json({ username, password });
  await UserModel.create({ username, password });
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username });
  if (!user) {
    res.status(500);
    res.json({ message: "User not registered" });
    return;
  } else {
    if (user?.password === password) {
      res.json({ message: "Logged in successfully" });
      return;
    } else {
      res.status(500);
      res.json({ message: "Please check your username or password" });
    }
  }
});

app.get("/fetch", async (req,res) => {
  UserModel.find({}, (err,result) => {
    err ? res.send(err) : res.send(result)
    console.log(result)
  } )

})


app.listen(PORT, () => console.log(`server running at port ${PORT}`));

export { router };
