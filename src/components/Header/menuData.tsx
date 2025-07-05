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
        title: "Web Development",
        path: "/services/web-development",
        newTab: false,
      },
      {
        id: 42,
        title: "App Development",
        path: "/services/app-development",
        newTab: false,
      },
      {
        id: 43,
        title: "Data Analytics",
        path: "/services/data-analytics",
        newTab: false,
      },
      {
        id: 44,
        title: "UI/UX Design",
        path: "/services/ui-ux-design",
        newTab: false,
      },
      {
        id: 45,
        title: "Digital Marketing & SEO",
        path: "/services/digital-marketing-seo",
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
