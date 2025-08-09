import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/modules/labs/pages/LabTest.vue') },
      {
        path: '/simulaciones/simulation-test',
        name: 'sim-test',
        component: () => import('src/modules/simulations/pages/SimulationText.vue'),
      },
      {
        path: '/simulaciones/gases',
        name: 'sim-gases',
        component: () => import('src/modules/simulations/pages/gasesSimulationPage.vue'),
      },
      {
        path: '/simulaciones/efecto-fotoelectrico',
        name: 'sim-efecto-fotoelectrico',
        component: () =>
          import('src/modules/simulations/pages/efectoFotoelectricoSimulationPage.vue'),
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
