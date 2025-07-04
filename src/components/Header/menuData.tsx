import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
    {
    id: 3,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Web Developement",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "App Developement",
        path: "/contact",
        newTab: false,
      },
     
    ],
  },
  {
    id: 4,
    title: "Blog",
    path: "/blog",
    newTab: false,
  },
  {
    id: 5,
    title: "Support",
    path: "/contact",
    newTab: false,
  },

];
export default menuData;
