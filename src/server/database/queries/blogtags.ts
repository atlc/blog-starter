import { Query } from "..";
import { BlogTagPair } from "../../types";

const create = ({ blogid, tagid }: BlogTagPair) =>
    Query("INSERT INTO BlogTags (blogid, tagid) VALUES (?, ?)", [blogid, tagid]);

const deleteAllByBlogId = (blogid: number) => Query("DELETE FROM BlogTags WHERE blogid=?", [blogid]);

export default {
    create,
    deleteAllByBlogId,
};
