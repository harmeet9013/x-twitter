const ROUTES = {
    USER: "/users",
};

const append = (array) => {
    return array.join("/");
};

export default {
    auth: {
        login: append([ROUTES.USER, "/login"]),
        register: append([ROUTES.USER, "/register"]),
    },
};
