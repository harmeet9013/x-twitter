import {
    ExploreRounded,
    HomeRounded,
    PersonRounded,
} from "@mui/icons-material";
//
import { paths } from "./paths";

export const MAIN_NAV_WIDTH = 400;

export const HEADER = 80;
export const HEADER_OFFSET = 60;

export const NAV_LIST = [
    {
        value: "home",
        url: paths.home,
        label: "Home",
        icon: <HomeRounded />,
    },
    {
        value: "discover",
        url: paths.discover,
        label: "Discover",
        icon: <ExploreRounded />,
    },
    {
        value: "profile",
        url: paths.profile,
        label: "Profile",
        icon: <PersonRounded />,
    },
];
