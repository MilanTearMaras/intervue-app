import { createRouter, createWebHistory } from 'vue-router';
import FormPage from '../pages/FormPage.vue';

const routes = [
    { path: '/', name: 'FormPage', component: FormPage },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
