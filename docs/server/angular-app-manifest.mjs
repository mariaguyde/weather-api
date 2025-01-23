
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
    'index.csr.html': {size: 25612, hash: 'e348725ba15879b695111ac6cd6d8ee654d8b7eff81e8bcf6fc37eeec6c1b273', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 26128, hash: '7ba83587b6b1680ce2762c5533f267699107e0698269cceb708351604f3f8818', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 33044, hash: 'ae208e3b316dcdee85d448099d43d0a91e343222f38bc50ac6421fe868c3bd1f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
