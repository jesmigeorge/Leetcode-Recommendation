const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(
      '/api',
      createProxyMiddleware({
        target: 'http://localhost:5000/', // Replace with your Flask API URL
        changeOrigin: true,
      })
    );
  };
  