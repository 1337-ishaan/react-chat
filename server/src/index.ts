import express from "express";
import {connect} from './db';
import * as dotenv from 'dotenv'

var app = express();
const PORT = 3010;
const router = express.Router();



connect()
const chatHistory = router.post('/chat-history', (req,res) => res.send("chat-history"))

router.get('/profile-highlighted', (req,res) => res.send("profile-highlighted"))
app.get('/', (req,res) => {
    res.send("Hello World");
})

app.listen(PORT, () => console.log(`server running at port ${PORT}`));


export {router};