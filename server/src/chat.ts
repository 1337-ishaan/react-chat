import express from "express";

const router = express.Router();

router.get("/chat", (req, res) => console.log("Chat history"));
router.post("/chat", (req, res) => console.log("Chat history"));

export { router as chatRouter };
