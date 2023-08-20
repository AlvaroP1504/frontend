const HelloWorld = () => import('../components/HelloWorld.vue')
const App = () => import('../App.vue')

const routes = [
    { path: "/", redirect: "/books" },
    { path: "/books", component: App},
    { path: "/hello-world", component: HelloWorld },
];

export default routes;