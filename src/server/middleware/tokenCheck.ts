import { RequestHandler } from "express";
import utils from "../utils";

export const tokenCheck: RequestHandler = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ message: "No auth header" });

    const token = authHeader.split(" ")[1];
    if (!token) return res.status(401).json({ message: "No bearer token" });

    try {
        const payload = utils.tokens.verify(token);
        req.pizza = payload;
        next();
    } catch (error) {
        const err = error as Error;
        res.status(401).json({ message: err.message });
    }
};
