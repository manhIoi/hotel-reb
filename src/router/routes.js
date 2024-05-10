import MainLayout from "layouts/MainLayout.vue";
import HomePage from "pages/home/HomePage.vue";
import SearchPage from "pages/search/SearchPage.vue";
import ContactPage from "pages/contact/ContactPage.vue";
import BranchPage from "pages/branch/BranchPage.vue";
import RoomDetailPage from "pages/room/RoomDetailPage.vue";
import RoomBookingHistoryPage from "pages/room-booking-history/room-booking-history-page.vue";

export const ROUTES_PATH = {
  home: "/",
  search: "/search",
  contact: "/contact",
  branch: "/branch",
  roomDetail: "/room-detail",
  roomBookingHistory: "/room-booking-history",
};

const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [
      { path: ROUTES_PATH.home, component: HomePage },
      { path: ROUTES_PATH.search, component: SearchPage },
      { path: ROUTES_PATH.contact, component: ContactPage },
      { path: ROUTES_PATH.branch, component: BranchPage },
      { path: ROUTES_PATH.roomDetail, component: RoomDetailPage },
      {
        path: ROUTES_PATH.roomBookingHistory,
        component: RoomBookingHistoryPage,
      },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
