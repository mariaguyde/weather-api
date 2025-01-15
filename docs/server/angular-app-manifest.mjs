
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/weather-api/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/weather-api"
  }
],
  assets: {
    'index.csr.html': {size: 25221, hash: 'bfb00ac3402d2bfe82b49ef1b852ecb73e57b480f4550acc0a55d18d6a8b01c7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 25734, hash: '55d11f2bb99975649e91e8ccfd70abc8d9304347cca9943a2a59f34de067dea4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 32636, hash: '6f31887236cefa554d6c388ec1a3a825b617ccafec9f29d75b89cac0d7ae4bae', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
