import Login from "../pages/Login";
import Info from "../pages/Info";
import ContactUs from "../pages/ContactUs";
import Jogs from "../pages/Jogs";
import * as path from "./path"

export const publicRoutes = [
    {
        path: path.Login,
        Component: Login,
    },
    {
        path: path.Jogs,
        Component: Jogs,
    },
    {
        path: path.Info,
        Component: Info,
    },
    {
        path: path.ContactUs,
        Component: ContactUs,
    }
];
