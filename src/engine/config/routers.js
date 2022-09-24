//Engine
import {links} from "./links";
//Parts
import Main from "../../ui/pages/Main";
import Hotels from "../../ui/pages/Hotels/Hotels";
import About from "../../ui/pages/About";

export const pages = [
    {
        link: links.main,
        element: <Main/>
    },
    {
        link: links.hotels,
        element: <Hotels/>
    },
    {
        link: links.about,
        element: <About />
    }
]