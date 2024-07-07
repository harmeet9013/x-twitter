import { FormProvider as Form } from "react-hook-form";

export default function FormProvider({ methods, onSubmit, children }) {
    return (
        <Form {...methods}>
            <form
                onSubmit={onSubmit}
                style={{
                    width: "inherit",
                    height: "inherit",
                }}
            >
                {children}
            </form>
        </Form>
    );
}
