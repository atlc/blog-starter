import mysql from "mysql";
import config from "../config";

const pool = mysql.createPool(config.db);

export const Query = <T = mysql.OkPacket>(sql: string, values: unknown[] = []) => {
    return new Promise<T>((resolve, reject) => {
        pool.query(sql, values, (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    });
};

import blogs from "./queries/blogs";
import authors from "./queries/authors";
import blogtags from "./queries/blogtags";
import tags from "./queries/tags";

export default {
    blogs,
    authors,
    blogtags,
    tags,
};
