import { api, decryptApi, encryptApi } from "@/lib";

const GET_REQUEST = async (url, params) => {
    return await api
        .get(url, {
            params,
        })
        .then(
            (response) => {
                return decryptApi(response?.data);
            },
            (error) => {
                return {
                    status: false,
                    message: error?.message || JSON.stringify(error),
                    data: false,
                };
            }
        );
};

const POST_REQUEST = async (url, data, params) => {
    const encryptedData = encryptApi(data);
    console.log(encryptedData);
    return await axios.post(url, encryptedData, { params }).then(
        (response) => {
            return decryptApi(response?.data);
        },
        (error) => {
            return {
                status: false,
                message: error?.message || JSON.stringify(error),
                data: false,
            };
        }
    );
};

const PUT_REQUEST = async (url, data, params) => {
    const encryptedData = encryptApi(data);
    return await axios.put(url, encryptedData, { params }).then(
        (response) => {
            return decryptApi(response?.data);
        },
        (error) => {
            return {
                status: false,
                message: error?.message || JSON.stringify(error),
                data: false,
            };
        }
    );
};

export default { GET_REQUEST, POST_REQUEST, PUT_REQUEST };
