const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  // devServer: {
  //   proxy: {
  //     "/auth": {
  //       target: "http://192.168.1.136:8080",
  //       changeOrigin: true,
  //       pathRewrite: { "^/auth": "/auth" }, // Opcional si el backend ya usa "/auth"
  //     },
  //   },
  // },
});
