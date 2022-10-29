import { createRouter, createWebHistory } from 'vue-router';
import ReCetas from '../views/ReCetas.vue';

const routes = [{
  mode: 'history',
  path: '/',
  name: 'ReCetas',
  component: ReCetas,
},
{
  mode: 'history',
  path: '/leche-frita',
  name: 'Leche Frita',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../views/LecheFrita.vue'),
},
{
  mode: 'history',
  path: '/polea',
  name: 'Polea',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../views/PoLea.vue'),
},
{
  mode: 'history',
  path: '/piononos',
  name: 'Piononos',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../views/PioNonos.vue'),
},
{
  mode: 'history',
  path: '/pan-de-cadiz',
  name: 'Pan de Cádiz',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../views/PanCadiz.vue'),
},
{
  mode: 'history',
  path: '/solomillo',
  name: 'Solomillo',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../views/SoloMillo.vue'),
},
{
  mode: 'history',
  path: '/paletilla-de-cordero',
  name: 'Paletilla de Cordero',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../views/PaletillaCordero.vue'),
},
{
  mode: 'history',
  path: '/salmorejo',
  name: 'Salmorejo',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../views/SalMorejo.vue'),
},
{
  mode: 'history',
  path: '/ajoblanco',
  name: 'Ajo Blanco',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../views/AjoBlanco.vue'),
},
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
