import { createWebHistory, createRouter } from "vue-router";
// import HomePage from "../Pages/HomePage.vue";
import AboutPage from "../Pages/AboutPage.vue";
// import ContactPage from "../Pages/ContactPage.vue";
import AllProfiles from "../Pages/AllProfiles.vue";
import AdminProfile from "../Pages/AdminProfile.vue";
import InboxPage from "../Pages/InboxPage.vue";
import TablePage from "../Pages/TablePage.vue";

const routes = [
  {
    name: "HomePage",
    path: "/",
    component: () => import("../Pages/HomePage.vue"), // no need to import component at the top with this method
  },
  {
    name: "AboutPage",
    path: "/About",
    component: AboutPage, // need to import component at the top if using this method
  },
  {
    name: "ContactPage",
    path: "/Contact",
    component: ()=> import("../Pages/ContactPage"),
  },
  {
    name: "AllProfiles",
    path: "/Profiles",
    component: AllProfiles,
  },
  {
    name: "AdminProfile",
    path: "/Admin",
    component: AdminProfile,
  },
  {
    name: "InboxPage",
    path: "/Inbox",
    component: InboxPage,
  },
  {
    name: "TablePage",
    path: "/Table",
    component: TablePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
