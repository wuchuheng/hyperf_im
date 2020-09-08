import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/BasicLayout',
      routes: [
        {
          path: '/',
          component: '@/pages/index'
        },
        {
          path: 'dashboard',
          component: '@/pages/Dashboard',
          exact: true
        }
      ]
    },
  ],
});
