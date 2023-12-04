import { Query } from "..";
import { Tag } from "../../types";

const all = () => Query<Tag[]>("SELECT * FROM Tags");

export default {
    all,
};
