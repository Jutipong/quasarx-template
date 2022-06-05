import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '',
    component: () => import('layouts/DefaultLayout.vue'),
    children: [{ path: '', component: () => import('pages/Login.vue') }],
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'home', component: () => import('pages/Home.vue') },
      { path: 'dashboard', component: () => import('pages/Dashboard.vue') },
    ],
  },
  {
    path: '/demo',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/crud', component: () => import('pages/CRUD.vue') },
      { path: '/uploadfile', component: () => import('pages/UploadFile.vue') },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
