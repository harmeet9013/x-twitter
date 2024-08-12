import crypto from "crypto";
//
import { SECRET_IV, SERCET_KEY } from "@/config";

const METHOD = "aes-128-cbc";

export const encryptApi = (data) => {
    const key = crypto.randomBytes(32);
    console.log(key.toString("base64"));
    let encryptedData = crypto.createCipheriv(
        METHOD,
        crypto.SERCET_KEY,
        SECRET_IV
    );
    let finalData = encryptedData.update(data, "utf8", "hex");
    finalData += encryptedData.final("hex");

    return finalData;
};

export const decryptApi = (data) => {
    let decryptedData = crypto.createDecipheriv(METHOD, SERCET_KEY, SECRET_IV);
    let finalData = decryptedData.update(data, "hex", "utf8");
    finalData += decryptedData.final("utf8");

    return finalData;
};
