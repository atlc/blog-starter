export interface BaseAuthor {
    name: string;
    email: string;
    password: string;
}

export interface Author extends BaseAuthor {
    id: number;
    created_at: string;
}

export interface BaseBlog {
    authorid: number;
    title: string;
    content: string;
    location?: string;
}

export interface Blog extends BaseBlog {
    id: number;
    created_at: string;
    updated_at: string | null;
}

export interface BlogTagPair {
    blogid: number;
    tagid: number;
}

export interface Tag {
    id: number;
    name: string;
}

export interface Payload {
    id: Author["id"];
    email: Author["email"];
    name: Author["name"];
}

declare global {
    namespace Express {
        export interface Request {
            pizza: Payload;
        }
    }
}
