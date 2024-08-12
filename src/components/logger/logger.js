import { enqueueSnackbar } from "notistack";

export const logger = {
    succes: (message, options = {}) => {
        enqueueSnackbar(message || "Success", {
            ...options,
            variant: "success",
        });
    },
    error: (message, options = {}) => {
        enqueueSnackbar(message || "Error", {
            ...options,
            variant: "error",
        });
    },
    info: (message, options = {}) => {
        enqueueSnackbar(message || "Info", {
            ...options,
            variant: "info",
        });
    },
    warning: (message, options = {}) => {
        enqueueSnackbar(message || "Warning", {
            ...options,
            variant: "warning",
        });
    },
};
