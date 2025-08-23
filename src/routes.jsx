import { Home, Gallery, FAQ } from "@/pages";
import Services from "./pages/services";

export const routes = [
  {
    name: "home",
    path: "/home",
    element: <Home />,
  },
  {
    name: "gallery",
    path: "/gallery",
    element: <Gallery />,
  },
  {
    name: "services",
    path: "/services",
    element: <Services />,
  },

  {
    name: "FAQ",
    path: "/faq",
    element: <FAQ />,
  },
];

export default routes;
