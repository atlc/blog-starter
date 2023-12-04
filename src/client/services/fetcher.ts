import Swal from "sweetalert2";
import reauthenticate from "./reauthenticate";

type METHODS = "POST" | "PUT" | "DELETE" | "GET";
export const TOKEN_KEY = "token";

const fetcher = <T>(url: string, method: METHODS = "GET", body?: any) => {
    return new Promise<T>(async (resolve) => {
        const headers: HeadersInit = {};
        const fetchOptions: RequestInit = {
            method,
        };

        const token = localStorage.getItem(TOKEN_KEY);
        if (token) {
            headers["Authorization"] = `Bearer ${token}`;
        }

        if (method === "POST" || method === "PUT") {
            headers["Content-Type"] = "application/json";
            fetchOptions["body"] = JSON.stringify(body);
        }

        fetchOptions["headers"] = headers;

        try {
            const res = await fetch(url, fetchOptions);
            const data = await res.json();

            if (res.status === 401 && !data.isLogin) {
                await reauthenticate();
            }

            if (!res.ok) throw new Error(data.message);

            resolve(data);
        } catch (error) {
            const err = error as Error;
            console.error(err);
            Swal.fire({
                title: "Oh no!",
                icon: "error",
                text: err.message,
                timer: 6000,
                toast: true,
                position: "top-right",
            });
        }
    });
};

export const POST = <T = any>(url: string, data: any) => fetcher<T>(url, "POST", data);
export const PUT = <T = any>(url: string, data: any) => fetcher<T>(url, "PUT", data);
export const DELETE = <T = any>(url: string) => fetcher<T>(url, "DELETE");
export const GET = <T = any>(url: string) => fetcher<T>(url);
