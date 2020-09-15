import { defineConfig } from 'umi';

export default defineConfig({
  request: {
    dataField: 'data',
  },
  dva: {
    immer: true,
    hmr: false,
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/login', component: '@/pages/Login', exact: true },
    { path: '/test', component: '@/pages/Test', exact: true },
    {
      path: '/',
      component: '@/layouts/BasicLayout',
      routes: [
        { path: '/', redirect: '/dashboard' },
        { path: '/dashboard', component: '@/pages/Dashboard' },
        { path: '/chat', component: '@/pages/Chat' }
      ],
      wrappers: [
        '@/utils/RouteAuth',
      ],
    },
  ],
});
