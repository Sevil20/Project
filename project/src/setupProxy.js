const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://api.spoonacular.com', // Change to the actual API URL
      changeOrigin: true,
    })
  );
};
