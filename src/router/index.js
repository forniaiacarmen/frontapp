// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router';

// Importa tus vistas (componentes de las páginas)
//import Home from '../views/Home.vue';
import Login from '../view/Login.vue';
import Register from '../view/Register.vue';
import Main from '../view/Main.vue';

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/main',
    name: 'Main',
    component: Main,
    meta: { requiresAuth: true },  

  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), // Configura el tipo de historial (puedes usar hash o history)
  routes,
});

router.beforeEach((to, from, next) => {
  // Si la ruta requiere autenticación y el usuario no tiene token
  const isAuthenticated = localStorage.getItem('token');
  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    // Redirigir a la página de login si no está autenticado
    next({ name: 'Login' });
  } else {
    // Si la ruta no requiere autenticación, o está autenticado, continuar
    next();
  }
});

export default router;
