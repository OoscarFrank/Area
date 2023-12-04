import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () => import('./LoginPage.vue'),
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('./HomePage.vue'),
    },
    {
        path: '/forgot-password',
        name: 'ForgotPassword',
        component: () => import('./ForgotPassword.vue'),
    }
  ],
});

const app = createApp(App);
app.use(router);
app.mount('#app');
