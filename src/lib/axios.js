import axios from "axios";
import { getSession } from "next-auth/react";
//
import { API_URL } from "@/config";

const api = axios.create({
    baseURL: API_URL,
});

api.interceptors.request.use(async (config) => {
    const session = await getSession();

    if (!!session) {
        config.headers["Authorization"] = `Bearer ${session.user.token}`;
    }

    return config;
});

export default api;
