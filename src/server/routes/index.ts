import express from "express";
import tagRouter from "./tags";
import authorRouter from "./authors";
import blogRouter from "./blogs";

const router = express.Router();

router.use("/api/tags", tagRouter);
router.use("/api/blogs", blogRouter);
router.use("/auth", authorRouter);

export default router;
