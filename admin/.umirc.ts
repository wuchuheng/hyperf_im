import { defineConfig } from 'umi';
import ChatLink from "@/pages/connect/ChatLink";

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
    { path: '/test/tmp', component: '@/pages/Test/components/Tmp', exact: true },
    {
      path: '/connect',
      routes: [
        {path: 'chat-links/:site', component: '@/pages/connect/ChatLink'}
      ]
    },
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
            { path: 'connect/chat-link/sites/:site',
              component: '@/pages/Setting/components/ChatLink'
            },
            {
              path: 'connect/chat-link/sites/:site/pc-windows',
              component: '@/pages/Setting/components/ChatLink/components/RightBarRender/components/ChatWindowsSettingRender/components/PcWindows'
            }
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
