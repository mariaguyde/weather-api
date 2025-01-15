
export default {
  basePath: '/weather-api/',
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
