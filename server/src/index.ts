import express from "express";
import { connect } from "./db";
import * as dotenv from "dotenv";
import cors from "cors";
import { UserModel, MessagesModel } from "./users/users.model";
import * as mongoose from "mongoose";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
const http = require("http");
const socket = require("socket.io");

const app = express();
app.use(cors());

const server = createServer(app);
// const httpServer = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "http://172.105.61.111:3000",
  },
});

io.on("connection", (socket: any) => {
  socket.on("chat message", (msg: any) => {
    console.log("message: " + msg);
  });
});

io.use((socket: any, next: any) => {
  console.log(socket);
  const username = socket.handshake.auth.user;
  console.log(username);
  if (!username) {
    return next(new Error("invalid username"));
  }
  socket.username = username;
  next();
});

io.on("connection", (socket: any) => {
  const users = [];
  for (let [id, socket] of io.of("/").sockets) {
    users.push({
      userID: id,
      username: socket.username,
    });
  }
  socket.emit("users", users);
  // ...
});

io.on("connection", (socket: any) => {
  // notify existing users
  socket.on("user connected", () => ({
    userID: socket.userId,
    username: socket.username,
  }));
});

io.on("connection", (socket: any) => {
  socket.on("private message", async ({ sender, content, receiver }: any) => {
    MessagesModel.create({ sender, receiver, content }).then(() => {
      io.to(receiver).emit(content);
   });
    console.log(sender, content, receiver, "data stored in mongodb ");

    // await messages.create({})
  });
});
// get the content and id of the user to be sent

// store in messages named schema

// emit socket.io and send it there

connect();
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
      res.json({ status: 200, user, message: "Logged in successfully" });
      // res.send(user)
      return;
    } else {
      res.status(500);
      res.json({ message: "Please check your username or password" });
    }
  }
});

// getting all the user data from mongo
app.get("/data", async (req, res) => {
  UserModel.find({}, (err, result) => {
    err ? res.send(err) : res.send(result);
    console.log(result);
  });
});

app.get("/messages", async (req, res) => {
  MessagesModel.find({}, (err, result) => {
    err ? res.send(err) : res.send(result);
    console.log(result);
  });
});

server.listen(PORT, () => console.log(`server running at port ${PORT}`));
