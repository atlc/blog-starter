import jwt from "jsonwebtoken";
import config from "../config";
import { Payload } from "../types";

const createToken = (pizza: Payload) => {
    if (!config.tokens.secret) throw new Error("Missing token secret lol");
    const token = jwt.sign(pizza, config.tokens.secret, { expiresIn: config.tokens.expiration });
    return token;
};

const verify = (token: string) => {
    if (!config.tokens.secret) throw new Error("Missing token secret lol");

    const data = jwt.verify(token, config.tokens.secret) as Payload;
    return data;
};

export default {
    createToken,
    verify,
};
