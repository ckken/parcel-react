require('browser-sync').init({
  port: 8888,
  open: false,
  server: {
    baseDir: 'dist',
    middleware: [
      require("compression")(),
      require('connect-history-api-fallback')()
    ]
  },
  ui: {
    port: 8889
  }
})
