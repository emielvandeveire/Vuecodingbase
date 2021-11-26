import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Library from "../views/Library.vue";
import Create from "../views/Create.vue";
import CodeEditor from "../views/CodeEditor.vue";

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    {
        path: "/library",
        name: "Library",
        component: Library,
    },
    {
        path: "/create",
        name: "Create",
        component: Create,
    },
    {
        path: "/codeeditor",
        name: "Code Editor",
        component: CodeEditor,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;