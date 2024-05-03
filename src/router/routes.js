import MainLayout from "layouts/MainLayout.vue";
import HomePage from "pages/HomePage.vue";
import SearchPage from "pages/SearchPage.vue";
import ContactPage from "pages/ContactPage.vue";

export const ROUTES_PATH = {
  home: '/',
  search: '/search',
  contact: '/contact',
}


const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: ROUTES_PATH.home, component: HomePage },
      { path: ROUTES_PATH.search, component: SearchPage },
      { path: ROUTES_PATH.contact, component: ContactPage }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
