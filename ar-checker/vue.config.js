const { defineConfig } = require('@vue/cli-service')

// GitHub Pages (project site): https://<user>.github.io/ar-checker/
// Относительные пути работают и в подпапке репозитория, и на корневом user.github.io
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
})
