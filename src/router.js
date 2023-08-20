import { createRouter, createWebHistory } from "vue-router";
import routes from "./router/main.route";

const history = createWebHistory();
const router = createRouter({
    history,
    routes,
});

export default router;
