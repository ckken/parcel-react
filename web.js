const browserSync = require('browser-sync')
const historyFallback = require('connect-history-api-fallback')

browserSync.init({
  port: 1234,
  open: false,
  server: {
    baseDir: 'dist',
    middleware: [
      historyFallback()
    ]
  },
  ui: {
    port: 1235
  }
})
