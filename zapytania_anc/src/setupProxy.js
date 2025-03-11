const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://amunatcoll.pl:8000/',
      changeOrigin: true,
    })
  );
};