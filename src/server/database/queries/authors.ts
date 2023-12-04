import { Query } from "../";
import { Author, BaseAuthor } from "../../types";

const all = () => Query<Author[]>("SELECT * FROM Authors");

const find_by = (col: "id" | "email" | "username", value: number | string) =>
    Query<Author[]>("SELECT * FROM Authors WHERE ??=?", [col, value]);

const create = (newAuthor: BaseAuthor) => Query("INSERT INTO Authors SET ?", [newAuthor]);

const update = (updatedAuthor: BaseAuthor, id: Author["id"]) =>
    Query("UPDATE Authors SET ? WHERE id=?", [updatedAuthor, id]);

const destroy = (id: number) => Query("DELETE FROM Authors WHERE id=?", [id]);

export default {
    all,
    find_by,
    create,
    update,
    destroy,
};
