import ProjectsPage from "@/views/ProjectsPage.vue";
import AboutPage from "@/views/AboutPage.vue";
import HomePage from "@/views/HomePage.vue";
import SkillsPage from "@/views/SkillsPage.vue";
import ContactPage from "@/views/ContactPage.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/about",
    name: "AboutPage",
    component: AboutPage,
  },
  {
    path: "/skills",
    name: "SkillsPage",
    component: SkillsPage,
  },
  {
    path: "/projects",
    name: "ProjectsPage",
    component: ProjectsPage,
  },
  {
    path: "/contact",
    name: "ContactPage",
    component: ContactPage,
  },
];

export default routes;
