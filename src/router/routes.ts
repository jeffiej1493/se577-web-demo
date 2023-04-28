import { RouteRecordRaw } from 'vue-router';

const LoginPage = () => import('@/pages/AppPages/LoginPage.vue');
const InfoPage = () => import('@/pages/AppPages/InfoPage.vue');
const RepositoriesPage = () => import('@/pages/AppPages/RepositoriesPage.vue');
const RepositoryDetailsPage = () => import('@/pages/AppPages/RepositoryDetailsPage.vue');

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/AppPages/Home.vue') },
      { path: '/about', component: () => import('pages/AppPages/About.vue') },
      {
        path: '/about2',
        component: () => import('pages/AppPages/AboutModular.vue'),
      },
      {
        path: '/dynamic',
        component: () => import('pages/AppPages/Dynamic.vue'),
      },
      {
        path: '/props',
        component: () => import('pages/AppPages/PropsPage.vue'),
      },
      {
        path: '/simple_state',
        component: () => import('pages/AppPages/StatePage.vue'),
      },
      {
        path: '/bc_demo',
        component: () => import('pages/AppPages/BCPage.vue'),
      },
      {
        path: '/gh_demo',
        component: () => import('pages/AppPages/GHPage.vue'),
      },
      {
        path: '/login',
        component: LoginPage,
      },
      {
        path: '/info',
        component: InfoPage,
      },
      {
        path: '/repos',
        component: RepositoriesPage,
      },
      {
        path: '/repo-details',
        component: RepositoryDetailsPage,
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
