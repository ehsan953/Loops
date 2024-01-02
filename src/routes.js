import { createWebHistory, createRouter } from "vue-router";
import HomePage from './components/HomePage.vue'
import AboutPage from './components/AboutPage.vue'
import ContactPage from './components/ContactPage.vue'
import AllProfiles from './components/AllProfiles.vue'
import AdminProfile from './components/AdminProfile.vue'
import InboxPage from './components/InboxPage.vue'

const routes = [
  {
    name: "HomePage",
    path: "/",
    component: HomePage,
  },
  {
    name: "AboutPage",
    path: "/About",
    component: AboutPage,
  },
  {
    name: "ContactPage",
    path: "/Contact",
    component: ContactPage,
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
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;