import { createApp } from "vue";
import { createPinia } from "pinia";
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import CountryPage from "./pages/CountryPage.vue";
import NotFoundPage from "./pages/NotFoundPage.vue";
import App from "./App.vue";
import TheSection from "./components/layout/TheSection.vue";
import TheMain from "./components/layout/TheMain.vue";
import WrongRequest from "./components/ui/WrongRequest.vue";
import CircleSpinner from "./components/ui/CircleSpinner.vue";
import "./main.css";

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    return { left: 0, top: 0 };
  },
  routes: [
    {
      path: "/",
      redirect: "/countries",
    },
    {
      path: "/countries",
      component: HomePage,
    },
    {
      path: "/countries/:countryName",
      component: CountryPage,
      props: true,
    },
    {
      path: "/:notFound(.*)",
      component: NotFoundPage,
    },
  ],
});

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);

app.component("TheSection", TheSection);
app.component("TheMain", TheMain);
app.component("WrongRequest", WrongRequest);
app.component("CircleSpinner", CircleSpinner);

app.mount("#app");
