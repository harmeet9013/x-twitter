import { api } from "@/lib";
import useBoolean from "../use-boolean";
import endpoints from "@/config/endpoints";

export default () => {
    const processing = useBoolean();

    const login = async (data) => {
        processing.onTrue();

        console.log(data);

        await api.post(endpoints.auth.login);

        processing.onFalse();
    };

    return {
        login,
        processing: processing.value,
    };
};
