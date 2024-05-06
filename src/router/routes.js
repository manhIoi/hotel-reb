import MainLayout from "layouts/MainLayout.vue";
import HomePage from "pages/HomePage.vue";
import SearchPage from "pages/SearchPage.vue";
import ContactPage from "pages/ContactPage.vue";
import BranchPage from "pages/BranchPage.vue";
import RoomDetailPage from "pages/RoomDetailPage.vue";

export const ROUTES_PATH = {
  home: '/',
  search: '/search',
  contact: '/contact',
  branch: '/branch',
  roomDetail: '/room-detail',
}


const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: ROUTES_PATH.home, component: HomePage },
      { path: ROUTES_PATH.search, component: SearchPage },
      { path: ROUTES_PATH.contact, component: ContactPage },
      { path: ROUTES_PATH.branch, component: BranchPage },
      { path: ROUTES_PATH.roomDetail, name:'room-detail',component: RoomDetailPage }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
