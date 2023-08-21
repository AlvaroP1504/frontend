// Cargando componentes con lazy loading
const BookList = () => import('../view/BookList.vue')
const BookDetail = () => import('../view/BookDetail.vue')

const routes = [
    { path: "/", redirect: "/books" },
    { path: "/books", component: BookList},
    { path: "/book/:id", component: BookDetail },
];

export default routes;