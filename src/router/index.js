import { createRouter, createWebHistory } from "vue-router";

import Dashboard from '../pages/master/DashboardUI'
import Home from '../pages/HomeContent'
import Profile from '../pages/ProfileContent'

const routes = [
    {
        name: 'Dashboard',
        path: '/',
        component: Dashboard
    },
    {
        name: 'Home',
        path: '/Home',
        component: Home
    },
    {
        name: 'Profile',
        path: '/Profile',
        component: Profile
    },
];
const router = Router();
export default router;
function Router() {
    const router = new createRouter({
        history: createWebHistory(),
        routes,
    });
    return router;
}