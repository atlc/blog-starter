import express from "express";
import bcrypt from "bcrypt";
import database from "../database";
import utils from "../utils";
import { Payload } from "../types";

const router = express.Router();

router.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    if (!name) return res.status(400).json({ message: "Must have a name!" });
    if (!email) return res.status(400).json({ message: "Must have an email!" });
    if (!password) return res.status(400).json({ message: "Must have a password!" });

    try {
        const newUser = { name, email, password };
        newUser.password = await bcrypt.hash(password, 12);

        const metadata = await database.authors.create(newUser);
        const id = metadata.insertId;

        const payload: Payload = { id, name, email };
        const token = utils.tokens.createToken(payload);

        res.status(201).json({ message: "Successfully registered!", id, token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error with registration lol" });
    }
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    if (!email) return res.status(400).json({ message: "Must have an email!" });
    if (!password) return res.status(400).json({ message: "Must have a password!" });

    try {
        const [author] = await database.authors.find_by("email", email);
        if (!author) return res.status(401).json({ message: "Invalid credentials", isLogin: true });

        const passwordsDoMatch = await bcrypt.compare(password, author.password);

        if (passwordsDoMatch) {
            const pizza: Payload = { id: author.id, name: author.name, email: author.email };
            const token = utils.tokens.createToken(pizza);

            res.status(200).json({ message: "HELL YEAH BROTHER", token });
        } else {
            res.status(401).json({ message: "Invalid credentials", isLogin: true });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error with login lol" });
    }
});

export default router;
