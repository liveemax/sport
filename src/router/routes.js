import Login from "../pages/Login";
import Info from "../pages/Info";
import ContactUs from "../pages/ContactUs";
import Jogs from "../pages/Jogs";

export const publicRoutes = [
    {
        path: '/',
        Component: Login,
    },
    {
        path: '/jogs',
        Component: Jogs,
    },
    {
        path: '/info',
        Component: Info,
    },
    {
        path: '/contact',
        Component: ContactUs,
    }
];
