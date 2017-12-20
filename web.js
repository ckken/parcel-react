require('browser-sync').init({
  port: 1234,
  open: false,
  server: {
    baseDir: 'dist',
    middleware: [
      require("compression")(),
      require('connect-history-api-fallback')()
    ]
  },
  ui: {
    port: 1235
  }
})
