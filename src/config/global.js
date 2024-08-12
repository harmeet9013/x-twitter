const postfix = "/api";

export const API_URL =
    process.env.NODE_ENV === "development"
        ? process.env.NEXT_PUBLIC_API_LOCAL + postfix
        : process.env.NEXT_PUBLIC_API_LIVE + postfix;

export const SERCET_KEY = process.env.NEXT_PUBLIC_SECRET_KEY;

export const SECRET_IV = process.env.NEXT_PUBLIC_SECRET_IV;

if (!SERCET_KEY || !SECRET_IV || !API_URL) {
    throw new Error(".env is missing!");
}
