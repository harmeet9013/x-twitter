const ROUTES = {
    USER: {
        LOGIN: "/login",
        REGISTER: "/register",
    },
};

const append = (array) => {
    return array.join("/");
};

export default {
    auth: {
        login: append([ROUTES.USER.LOGIN]),
    },
};
