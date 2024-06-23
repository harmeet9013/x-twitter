import { merge } from "lodash";
//
import stack from "./stack,";
import button from "./button";
import typography from "./typography";

export default function componentsOverrides(theme) {
    return merge(stack(theme), button(theme), typography(theme));
}
