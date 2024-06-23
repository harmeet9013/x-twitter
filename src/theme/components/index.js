import { merge } from "lodash";
//
import box from "./box";
import stack from "./stack";
import button from "./button";
import divider from "./divider";
import typography from "./typography";

export default function componentsOverrides(theme) {
    return merge(
        stack(theme),
        button(theme),
        typography(theme),
        box(theme),
        divider(theme)
    );
}
