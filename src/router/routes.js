import MainLayout from "layouts/MainLayout.vue";
import HomePage from "pages/home/HomePage.vue";
import SearchPage from "pages/search/SearchPage.vue";
import ContactPage from "pages/contact/ContactPage.vue";
import BranchPage from "pages/branch/BranchPage.vue";
import RoomDetailPage from "pages/room/RoomDetailPage.vue";
import RoomBookingHistoryPage from "pages/room-booking-history/room-booking-history-page.vue";
import AuthLayout from "layouts/AuthLayout.vue";
import SignInPage from "pages/auth/SignInPage.vue";
import SignUpPage from "pages/auth/SignUpPage.vue";
import ProfilePage from "pages/profile/ProfilePage.vue";

export const ROUTES_PATH = {
  home: "home",
  search: "search",
  contact: "contact",
  branch: "branch",
  roomDetail: "room-detail",
  roomBookingHistory: "room-booking-history",
  signIn: "sign-in",
  signUp: "sign-up",
  profile: "profile",
};

const routes = [
  {
    name: "main",
    path: "/",
    component: MainLayout,
    children: [
      { name: ROUTES_PATH.home, path: ROUTES_PATH.home, component: HomePage },
      {
        name: ROUTES_PATH.search,
        path: ROUTES_PATH.search,
        component: SearchPage,
      },
      {
        name: ROUTES_PATH.contact,
        path: ROUTES_PATH.contact,
        component: ContactPage,
      },
      {
        name: ROUTES_PATH.branch,
        path: ROUTES_PATH.branch,
        component: BranchPage,
      },
      {
        name: ROUTES_PATH.roomDetail,
        path: ROUTES_PATH.roomDetail,
        component: RoomDetailPage,
      },
      {
        path: ROUTES_PATH.roomBookingHistory,
        component: RoomBookingHistoryPage,
      },
      {
        path: ROUTES_PATH.profile,
        component: ProfilePage,
      },
      {
        path: "",
        redirect: { name: ROUTES_PATH.home },
      },
    ],
  },
  {
    name: "auth",
    path: "/auth",
    component: AuthLayout,
    children: [
      {
        name: ROUTES_PATH.signIn,
        path: ROUTES_PATH.signIn,
        component: SignInPage,
      },
      {
        name: ROUTES_PATH.signUp,
        path: ROUTES_PATH.signUp,
        component: SignUpPage,
      },
      {
        path: "",
        redirect: { name: ROUTES_PATH.signIn },
      },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
