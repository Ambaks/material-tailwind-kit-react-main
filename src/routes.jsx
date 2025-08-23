import { Home, Gallery, FAQ, Services } from "@/pages";

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
