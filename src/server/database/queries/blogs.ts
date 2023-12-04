import { Query } from "../";
import { Blog, BaseBlog } from "../../types";

const all = () => Query<Blog[]>("SELECT * FROM Blogs");
const one = (id: number) => Query<Blog[]>("SELECT * FROM Blogs WHERE id = ?", [id]);
const create = (newBlog: BaseBlog) => Query("INSERT INTO Blogs SET ?", [newBlog]);
const update = (updatedBlog: BaseBlog, id: Blog["id"]) => Query("Update Blogs SET ? WHERE id=?", [updatedBlog, id]);
const destroy = (id: Blog["id"]) => Query("DELETE FROM Blogs WHERE id=?", [id]);

export default {
    all,
    one,
    create,
    update,
    destroy,
};
