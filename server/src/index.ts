import express from "express";
import { connect } from "./db";
import * as dotenv from "dotenv";
import cors from "cors";
import { UserModel } from "./users/users.model";
import * as mongoose from "mongoose";
import { createServer } from "http";
import { Server, Socket } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "http://172.105.61.111:3000/",
  },
});

io.on("connection", (socket: Socket) => {
  console.log("user connected");
  socket.emit("message", "Hello World");
  socket.on("disconnected", () => {
    console.log({ socket });
    console.log("user disconnected");
  });
  socket.on("chatmessage", (msg: any) => io.emit(msg));
});

// httpServer.listen(3001);
io.use((socket: any, next) => {
  const username = socket.handshake.auth.username;
  if (!username) return next(new Error("invalid username"));
  socket.username = username;
  next();
});

// add "downlevelIteration": true, in tsconfig
io.on("connection", (socket) => {
  const users = [];
  for (let [id, socket] of io.of("/").sockets) {
    users.push({
      userID: id,
      // username:socket.username,
    });
  }
  socket.emit("users", users);
  // ...
});

io.on("connection", (socket) => {
  // notify existing users
  socket.broadcast.emit("user connected", {
    userID: socket.id,
    // username: socket.username,
  });
});

connect();

const app = express();

app.use(cors());

const PORT = 3010;

app.use(express.json());
app.get("/", (req, res) => {
  res.json("Hello World");
});

// register api
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

// login api
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await UserModel.findOne({ username });
  if (!user) {
    res.status(500);
    res.json({ message: "User not registered" });
    return;
  } else {
    if (user?.password === password) {
      res.json({ status: 200, message: "Logged in successfully" });
      return;
    } else {
      res.status(500);
      res.json({ message: "Please check your username or password" });
    }
  }
});

// getting all the data from mongo
app.get("/data", async (req, res) => {
  UserModel.find({}, (err, result) => {
    err ? res.send(err) : res.send(result);
    console.log(result);
  });
});

app.listen(PORT, () => console.log(`server running at port ${PORT}`));
