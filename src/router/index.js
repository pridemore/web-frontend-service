import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "@/views/Dashboard.vue";
import Tables from "@/views/Tables.vue";
import Billing from "@/views/Billing.vue";
import VirtualReality from "@/views/VirtualReality.vue";
import Profile from "@/views/Profile.vue";
import Rtl from "@/views/Rtl.vue";
import SignIn from "@/views/SignIn.vue";
import SignUp from "@/views/SignUp.vue";
import Properties from "@/views/Properties.vue"
import PropertiesList from "@/views/PropertiesList.vue"
import Application from "@/views/Application.vue"
import ApplicationsList from "@/views/ApplicationsList.vue";
import HomeProperties from "@/views/HomeProperties.vue"

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/HomeProperties",
  },
  {
    path: "/HomeProperties",
    name: "HomeProperties",
    component: HomeProperties
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/Properties",
    name: "Properties",
    component: Properties,
  },
  {
    path: "/PropertiesList",
    name: "PropertiesList",
    component: PropertiesList,
  },
  {
    path: "/Application/:propertyId",
    name: "Application",
    component: Application,
  },
  {
    path: "/ApplicationsList",
    name: "ApplicationsList",
    component: ApplicationsList,
  },
  {
    path: "/tables",
    name: "Tables",
    component: Tables,
  },
  {
    path: "/billing",
    name: "Billing",
    component: Billing,
  },
  {
    path: "/virtual-reality",
    name: "Virtual Reality",
    component: VirtualReality,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/rtl-page",
    name: "Rtl",
    component: Rtl,
  },
  {
    path: "/sign-in",
    name: "Sign In",
    component: SignIn,
  },
  {
    path: "/sign-up",
    name: "Sign Up",
    component: SignUp,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
