import { redirect } from "next/navigation";
//
import { paths } from "@/config";

export default function Page() {
    redirect(paths.home);
}
