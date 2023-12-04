import express from "express";
import DB from "../database";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const tags = await DB.tags.all();
        res.json(tags);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Can't get all tags at this time, #RIP" });
    }
});

export default router;
