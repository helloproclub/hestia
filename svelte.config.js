const preprocess = require('svelte-preprocess');

module.exports = {
  preprocess: preprocess({
    emitCss: true,
    hydratable: true,
    scss: true,
  }),
};
