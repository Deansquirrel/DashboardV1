import { defineConfig } from 'umi';

export default defineConfig({
  favicon: '/assets/favicon.ico',
  exportStatic: {
    //   htmlSuffix: true,
  },
  nodeModulesTransform: {
    type: 'none',
  },
  mock: false,
  routes: [
    { path: '/', exact: true, redirect: '/login' },
    { path: '/login', exact: true, component: '@/pages/login/login' },
  ],
});
