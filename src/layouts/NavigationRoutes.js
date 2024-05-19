import { ROUTES_PATH } from "src/router/routes";

export const navbarNavigationList = [
  {
    title: "appHeader.navbarList.branch",
    link: "branch",
  },
  {
    title: "appHeader.navbarList.search",
    link: "search",
  },
  {
    title: "appHeader.navbarList.contact",
    link: "contact",
  },
];

export const drawerNavigationList = [
  {
    title: "appDrawer.branch",
    link: "branch",
  },
  {
    link: "search",
    title: "appDrawer.search",
  },
  {
    title: "appDrawer.contact",
    link: "contact",
  },
  {
    title: "appDrawer.history",
    link: "room-booking-history",
  },
  {
    title: "appDrawer.profile",
    link: "profile",
  },
  {
    title: "appDrawer.payment",
    link: "card-management",
  },
];

export const profileNavigationList = [
  {
    title: "appHeader.profileList.profile",
    link: "profile",
    icon: "person",
  },
  {
    title: "appHeader.profileList.history",
    link: "room-booking-history",
    icon: "history",
  },
  {
    title: "appHeader.profileList.payment",
    link: "card-management",
    icon: "payment",
  },
];

export const footerNavigationList = [
  {
    title: "appFooter.linkList.home",
    link: "home",
  },
  {
    title: "appFooter.linkList.branch",
    link: "branch",
  },
  {
    title: "appFooter.linkList.contact",
    link: "contact",
  },
  {
    title: "appFooter.linkList.search",
    link: "search",
  },
];
