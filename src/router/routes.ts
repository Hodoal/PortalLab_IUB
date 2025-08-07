import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: '/simulaciones/simulation-test',
        name: 'sim-test',
        component: () => import('src/modules/simulations/pages/SimulationText.vue'),
      },
      {
        path: '/guias-laboratorios',
        name: 'guias-lab',
        component: () => import('src/modules/labs/pages/LabTest.vue'),
      },
      {
        path: '/laboratorios/circuito-serie-paralelo',
        name: 'lab-circuito-serie-paralelo',
        component: () => import('src/modules/labs/pages/LabCircutoSerParPage.vue'),
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
