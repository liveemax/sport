import Login from "../pages/Login";
import Info from "../pages/Info";
import ContactUs from "../pages/ContactUs";
import Jogs from "../pages/Jogs";
import { sport } from "../module/module";

export const publicRoutes = [
  {
    path: sport.path.login,
    Component: Login,
  },
  {
    path: sport.path.jogs,
    Component: Jogs,
  },
  {
    path: sport.path.info,
    Component: Info,
  },
  {
    path: sport.path.contactUs,
    Component: ContactUs,
  },
];
