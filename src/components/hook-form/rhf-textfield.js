import { TextField } from "@mui/material";
//
import { Controller, useFormContext } from "react-hook-form";

export default function RHFTextField({ name, ...other }) {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <TextField
                    {...field}
                    fullWidth
                    variant="outlined"
                    error={error}
                    helperText={error?.message || ""}
                    {...other}
                />
            )}
        />
    );
}
