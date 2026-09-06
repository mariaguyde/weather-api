
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  assets: {
    'index.csr.html': {size: 25600, hash: '6559ff8c316f6843cf0e75c9720539c232863c2286ed14632211be44d20c5e62', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 26116, hash: '858e4d133a8b0bf9c187040caf54327fce3eea3334c390fb93bd0e31846135fe', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 33144, hash: '1ef2c6f536aef3439c770e20b4f4d87bf130f266093975d4afe15c62de10db52', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
