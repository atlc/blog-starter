import express from "express";
import cors from "cors";
import indexRouter from "./routes";
import path from "path";

const app = express();

const { NODE_ENV } = process.env;
const isProd = NODE_ENV === "production";

console.log({ NODE_ENV });

app.use(express.json());
if (!isProd) app.use(cors());

if (isProd) app.use(express.static("public"));

app.use(indexRouter);

app.use(["/api/*", "/auth/*"], (req, res) => res.status(404).json({ message: "Not implemented at this time" }));

if (isProd)
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

app.listen(3000);
