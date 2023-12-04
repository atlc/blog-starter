import express from "express";
import DB from "../database";
import { tokenCheck } from "../middleware/tokenCheck";

const router = express.Router();

router.get("/", async (req, res) => {
    const blogz = await DB.blogs.all();
    const shortenedBlogs = blogz.map((b) => {
        const short = {
            ...b,
            content: b.content.substring(0, 40) + "... (Read more)",
        };
        return short;
    });

    res.json(shortenedBlogs);
});

router.post("/", tokenCheck, async (req, res) => {
    const { title, content, tagid, location } = req.body;

    try {
        const { insertId } = await DB.blogs.create({ title, content, location, authorid: req.pizza.id });
        // await DB.blogtags.create({ tagid, blogid: insertId });
        res.status(201).json({ message: "Created blog!" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error with creating blog post" });
    }
});

router.delete("/:id", tokenCheck, async (req, res) => {
    const id = Number(req.params.id);

    await DB.blogtags.deleteAllByBlogId(id);
    await DB.blogs.destroy(id);
});

export default router;
