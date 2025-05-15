import { Home, Gallery, FAQ } from "@/pages";

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
    name: "FAQ",
    path: "/faq",
    element: <FAQ />,
  },
];

export default routes;
