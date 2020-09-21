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
        { path: '/chat', component: '@/pages/Chat' },
        {
          path: 'setting',
          component: '@/pages/Setting',
          routes: [
            { path: 'chat-link', component: '@/pages/Setting/components/ChatLink'},
            { path: '*', component: '@/pages/Setting/components/NotFoundRender'}
          ],
        },
        { path: '/*', component: '@/pages/Error/Error404Page'}
      ],
      wrappers: [
        '@/utils/RouteAuth',
      ],
    },
  ],
});
