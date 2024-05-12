import { useRoutes } from "react-router-dom";

// Routes import
import { 
    ABOUT,
    ABS,
    CONTACT,
    HOME,
} from "./RouteConstants";

// Pages import
import Home from "../pages/LandingPage/home/Home";
import NotFound404 from "../pages/LandingPage/NotFound";
import LandingPageLayout from "../Layout/LandingPageLayout/LandingPageLayout";
import About from "../pages/LandingPage/about/About";
import Contact from "../pages/LandingPage/contact/Contact";
import Abs from "../pages/LandingPage/luggage/abs_box/Abs_box";

export default function Router() {
    return useRoutes([
        {
            path: HOME,
            element: <LandingPageLayout />,
            children: [
                {
                    path: HOME,
                    element: <Home />
                },
                {
                    path: ABOUT,
                    element: <About />
                },
                {
                    path: CONTACT,
                    element: <Contact />
                },
                {
                    path: ABS,
                    element: <Abs />
                }
            ]
        },
        { path: '*', element: <NotFound404 /> }
    ]);
}
